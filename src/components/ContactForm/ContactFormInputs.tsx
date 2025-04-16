
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

export interface FormValues {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Ime mora vsebovati vsaj 2 znaka" }),
  email: z.string().email({ message: "Vnesite veljaven email naslov" }),
  phone: z.string().optional(),
  message: z.string().min(10, { message: "Sporočilo mora vsebovati vsaj 10 znakov" }),
});

interface ContactFormInputsProps {
  onSubmit: (values: FormValues) => void;
  isSubmitting: boolean;
  isSuccess: boolean;
}

const ContactFormInputs: React.FC<ContactFormInputsProps> = ({ 
  onSubmit, 
  isSubmitting, 
  isSuccess 
}) => {
  const { 
    register, 
    handleSubmit, 
    reset, 
    formState: { errors } 
  } = useForm<FormValues>({
    resolver: zodResolver(contactFormSchema)
  });

  const submitHandler = (data: FormValues) => {
    onSubmit(data);
    if (isSuccess) {
      reset();
    }
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-sm">
      <form onSubmit={handleSubmit(submitHandler)} className="space-y-6">
        <div className="space-y-4">
          <div>
            <input
              type="text"
              {...register('name')}
              className={`w-full rounded-md border border-gray-300 px-4 py-2 focus:border-dark-red focus:outline-none focus:ring-1 focus:ring-dark-red ${errors.name ? 'border-red-500' : ''}`}
              placeholder="Ime in Priimek"
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
          </div>
          <div>
            <input
              type="email"
              {...register('email')}
              className={`w-full rounded-md border border-gray-300 px-4 py-2 focus:border-dark-red focus:outline-none focus:ring-1 focus:ring-dark-red ${errors.email ? 'border-red-500' : ''}`}
              placeholder="Email naslov"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
          </div>
          <div>
            <input
              type="tel"
              {...register('phone')}
              className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-dark-red focus:outline-none focus:ring-1 focus:ring-dark-red"
              placeholder="Telefon (neobvezno)"
            />
          </div>
          <div>
            <textarea
              {...register('message')}
              rows={10}
              className={`w-full rounded-md border border-gray-300 px-4 py-2 focus:border-dark-red focus:outline-none focus:ring-1 focus:ring-dark-red ${errors.message ? 'border-red-500' : ''}`}
              placeholder="Sporočilo"
            />
            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
          </div>
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full ${isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-dark-red hover:bg-dark-red/90'} text-white px-4 py-3 rounded-md transition-colors`}
        >
          {isSubmitting ? 'Pošiljanje...' : 'Pošlji sporočilo'}
        </button>
      </form>
    </div>
  );
};

export default ContactFormInputs;
