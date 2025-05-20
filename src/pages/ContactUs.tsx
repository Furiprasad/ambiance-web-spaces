
import React from 'react';
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Phone, Mail, User } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const formSchema = z.object({
  fullName: z.string().min(2, {
    message: "Full name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().optional(),
  subject: z.string().optional(),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

type FormValues = z.infer<typeof formSchema>;

const ContactUs = () => {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    console.log(data);
    // Here you would normally send the form data to your backend
    // For now, we'll just log it to the console
    alert("Message sent successfully!");
    form.reset();
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-grow pt-24 pb-16 bg-ambiance-light">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-serif text-center mb-12">Contact Us</h1>
          
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              {/* Contact Information Section */}
              <div className="p-8 bg-gradient-to-r from-ambiance-cream to-white border-b">
                <h2 className="text-2xl font-serif mb-6 text-ambiance-dark">Let's Connect</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="flex items-center">
                    <div className="h-12 w-12 rounded-full bg-ambiance-cream flex items-center justify-center mr-4">
                      <User className="h-5 w-5 text-ambiance-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Name</p>
                      <p className="font-medium">J. Phani Saradhi</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="h-12 w-12 rounded-full bg-ambiance-cream flex items-center justify-center mr-4">
                      <Phone className="h-5 w-5 text-ambiance-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Phone</p>
                      <p className="font-medium">+91 6302783779</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="h-12 w-12 rounded-full bg-ambiance-cream flex items-center justify-center mr-4">
                      <Mail className="h-5 w-5 text-ambiance-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Email</p>
                      <p className="font-medium">Sampathphani@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Contact Form Section */}
              <div className="p-8">
                <h2 className="text-2xl font-serif mb-6 text-center">Get in Touch</h2>
                
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="fullName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Full Name*</FormLabel>
                            <FormControl>
                              <Input placeholder="John Doe" {...field} />
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
                            <FormLabel>Email Address*</FormLabel>
                            <FormControl>
                              <Input type="email" placeholder="your@email.com" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone Number (optional)</FormLabel>
                            <FormControl>
                              <Input placeholder="+1 234 567 8900" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="subject"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Subject (optional)</FormLabel>
                            <FormControl>
                              <Input placeholder="How can we help you?" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message*</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Please tell us more about your project or inquiry..." 
                              className="min-h-[150px]" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <div className="flex justify-center mt-8">
                      <Button 
                        type="submit"
                        className="bg-ambiance-primary hover:bg-ambiance-primary/90 text-white px-8 py-6 h-auto text-lg"
                      >
                        Send Message
                      </Button>
                    </div>
                  </form>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;
