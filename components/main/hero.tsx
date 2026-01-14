'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { useReducedMotion } from 'framer-motion';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { toast } from 'sonner';

import { FireworksBackground } from '@/components/animate-ui/components/backgrounds/fireworks';
import { Send } from 'lucide-react';


import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { RippleButton, RippleButtonRipples } from '../animate-ui/components/buttons/ripple';
import { AnimateIcon } from '../animate-ui/icons/icon';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email.' }),
  message: z
    .string()
    .min(10, { message: 'Message must be at least 10 characters.' })
    .max(500, { message: 'Message is too long (max 500 characters).' }),
});

type FormValues = z.infer<typeof formSchema>;

type HeroProps = {
  population?: number;
};

export default function Hero({ population = 4 }: HeroProps) {
  const { resolvedTheme } = useTheme();
  const [isClient, setIsClient] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const [effectivePopulation, setEffectivePopulation] = useState(population);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const isLowEnd =
        navigator.hardwareConcurrency <= 4 ||
        /Mobi|Android|iPhone/i.test(navigator.userAgent);

      if (isLowEnd || shouldReduceMotion) {
        setEffectivePopulation(1);
      }
    }
  }, [shouldReduceMotion]);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  async function onSubmit(data: FormValues) {
    await new Promise((resolve) => setTimeout(resolve, 1200));

    console.log('Contact form submitted:', data);
    toast.success('Message sent!', {
      description: "We'll get back to you soon.",
    });

    form.reset();
  }

  if (!isClient) return null;

  return (
    <div className="relative h-full w-full">
      {/* Fireworks background */}
      <FireworksBackground
        className="absolute inset-0"
        color={resolvedTheme === 'dark' ? '#ffffff' : '#000000'}
        population={effectivePopulation}
      />

      {/* Semi-transparent overlay + centered contact form */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
        <Card className="w-full max-w-lg border bg-background/80 backdrop-blur-sm shadow-2xl">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold text-center">Get in Touch</CardTitle>
            <CardDescription className="text-center">
              Have a question or want to collaborate? Drop us a message!
            </CardDescription>
          </CardHeader>

          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your name" {...field} />
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
                        <Input type="email" placeholder="you@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Tell us what you're thinking..."
                          className="min-h-[120px] resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* RippleButton with animated Send icon */}
                <RippleButton
                  type="submit"
                  variant="default"
                  size="lg"
                  disabled={form.formState.isSubmitting}
                  className="w-full flex items-center justify-center gap-2"
                >
                  {form.formState.isSubmitting ? (
                    'Sending...'
                  ) : (
                    <AnimateIcon animateOnHover>
                      <Send />
                    </AnimateIcon>
                  )}
                  <RippleButtonRipples />
                </RippleButton>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
