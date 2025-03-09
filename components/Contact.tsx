"use client";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { SendIcon } from "lucide-react";
import { toast } from "sonner";
import { sendEmail } from "@/lib/resend";

const formSchema = z.object({
  nume: z
    .string()
    .min(3, { message: "Numele nu poate avea mai puțin de 3 litere" }),
  email: z.string().email({ message: "Adresa de email nu este validă" }),
  mesaj: z.string().min(10, { message: "Mesajul este prea scurt" }),
});

const Contact = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nume: "",
      email: "",
      mesaj: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      await sendEmail({
        name: values.nume,
        email: values.email,
        message: values.mesaj,
      });
      toast("Mesajul tau a fost trimis cu succes!");
      form.reset();
    } catch (error) {
      console.error("Error sending email:", error);
      toast("A aparut o eroare la trimiterea mesajului. Incercati din nou.");
    }
  };

  return (
    <section id="contact" className="py-24 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Lasă-ne un mesaj</h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Ai un proiect în minte sau vrei să afli mai multe despre serviciile
            noastre? Completează formularul și te vom contacta în cel mai scurt
            timp.
          </p>
        </div>

        <div className="bg-card p-8 md:p-12 rounded-xl border shadow-sm">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="nume"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-lg font-medium">Nume</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Nume și prenume"
                        {...field}
                        className="h-14 text-lg"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-lg font-medium">Email</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="email@gmail.com"
                        type="email"
                        {...field}
                        className="h-14 text-lg"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="mesaj"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-lg font-medium">Mesaj</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Spune-ne despre proiectul tău..."
                        {...field}
                        className="min-h-[150px] text-lg resize-y"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                className="w-full h-14 text-lg bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white rounded-lg transition-all duration-200 flex items-center justify-center gap-2 mt-6 border-0"
              >
                <SendIcon className="h-5 w-5" />
                Trimite mesajul
              </Button>
            </form>
          </Form>
        </div>

        <div className="mt-8 text-center text-muted-foreground">
          <p>
            Sau ne poți contacta direct la{" "}
            <a
              href="mailto:contact@hifly-studio.ro"
              className="text-purple-400 hover:text-purple-300 underline"
            >
              contact@hifly-studio.ro
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
