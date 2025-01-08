"use client";

import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const formSchema = z.object({
  firstName: z
    .string()
    .min(3, { message: "First name must contain at least 3 characters" })
    .max(20, { message: "First name must contain at most 20 characters" }),

  email: z.string().email({
    message: "Invalid email address",
  }),
});

type FormType = z.infer<typeof formSchema>;

const ContactForm = () => {
  // 1. Define your form.
  const form = useForm<FormType>({
    resolver: zodResolver(formSchema),
    defaultValues: {

      // 👇 Set the initial form values
      firstName: "abc",
      email: "abc@gmail.com",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: FormType) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>First Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your first name" {...field} />
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
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
};

export default ContactForm;
