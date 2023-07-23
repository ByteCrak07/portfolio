'use client';

import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import useSWRMutation from 'swr/mutation';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
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
import { Checkbox } from '@/components/ui/checkbox';
import { gmail, telegram } from '@/components/ui/icons';
import { Loader2 } from 'lucide-react';

const Contact: FC = () => {
  const formSchema = z.object({
    fullname: z.string().min(2, {
      message: 'Provide a valid name',
    }),
    email: z.string().email('Provide a valid email'),
    subject: z.string().min(2, {
      message: 'Provide a valid subject',
    }),
    message: z.string().min(10, {
      message: 'Enter at least 10 characters',
    }),
    copy: z.boolean(),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullname: '',
      email: '',
      subject: '',
      message: '',
      copy: false,
    },
  });

  async function sendRequest(
    url: string,
    { arg }: { arg: z.infer<typeof formSchema> }
  ) {
    return fetch(url, {
      method: 'POST',
      body: JSON.stringify(arg),
    }).then((res) => {
      if (res.status !== 200) throw new Error('Something went wrong');
      return res.json();
    });
  }

  const { trigger, isMutating } = useSWRMutation('/api/email', sendRequest);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    toast.promise(trigger(values), {
      loading: 'Sending message...',
      success: "Message sent to Abil's inbox.",
      error: 'Something went wrong!',
    });
  }

  return (
    <div className='mt-10 sm:mt-16'>
      <div className='flex flex-col items-center justify-center gap-x-10 gap-y-5 font-bold sm:flex-row'>
        <a href='mailto:abilsavio@gmail.com'>
          <button className='flex w-48 items-center justify-center gap-x-3 rounded-xl bg-[#e53935] px-3 py-2 hover:bg-[#c62828]'>
            <div className='w-10 rounded-full bg-white p-2'>{gmail}</div>Shoot
            an email
          </button>
        </a>
        <a
          href='https://t.me/abilsavio'
          target='_blank'
          rel='noopener noreferrer'
        >
          <button className='flex w-48 items-center justify-center gap-x-3 rounded-xl bg-[#23a0dc] px-3 py-2 hover:bg-[#29a9eb]'>
            Text me on
            <div className='w-10 rounded-full bg-white p-1'>{telegram}</div>
          </button>
        </a>
      </div>

      <div className='my-10 text-center text-lg font-bold'>OR</div>

      <div className='m-auto max-w-3xl'>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
            <div className='flex flex-col gap-x-10 sm:flex-row'>
              <FormField
                control={form.control}
                name='fullname'
                render={({ field }) => (
                  <FormItem className='flex-1'>
                    <FormLabel className='font-bold'>Full Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder='Your Name'
                        className='font-semibold'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name='email'
                render={({ field }) => (
                  <FormItem className='flex-1'>
                    <FormLabel className='font-bold'>Email</FormLabel>
                    <FormControl>
                      <Input
                        placeholder='user@example.xyz'
                        className='font-semibold'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name='subject'
              render={({ field }) => (
                <FormItem className='flex-1'>
                  <FormLabel className='font-bold'>Subject</FormLabel>
                  <FormControl>
                    <Input
                      placeholder='Subject for the message'
                      className='font-semibold'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name='message'
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='font-bold'>Message</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder='Enter your message here...'
                      className='bg-background font-semibold'
                      rows={10}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name='copy'
              render={({ field }) => (
                <FormItem className='flex flex-row items-start space-x-3 space-y-0'>
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange as any}
                    />
                  </FormControl>
                  <div className='space-y-1 leading-none'>
                    <FormLabel>Send me a copy of this message</FormLabel>
                  </div>
                </FormItem>
              )}
            />

            <Button
              type='submit'
              disabled={isMutating}
              className='bg-glow flex w-40 items-center justify-around font-bold text-white hover:bg-primary/20'
            >
              <div>{!isMutating ? 'Send message' : 'Sending...'}</div>
              <div
                className={isMutating ? 'inline-block animate-spin' : 'hidden'}
              >
                <Loader2 size={16.8} />
              </div>
              <div className={isMutating ? 'hidden' : ''}>🚀</div>
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default Contact;
