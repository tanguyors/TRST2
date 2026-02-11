'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslations } from 'next-intl';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export function ContactForm() {
  const t = useTranslations('Contact');
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  async function onSubmit(data: FormData) {
    setStatus('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus('success');
        reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-text-dark mb-1.5">
          {t('form.name')}
        </label>
        <input
          id="name"
          type="text"
          {...register('name', { required: t('validation.nameRequired') })}
          className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm text-text-dark placeholder-text-light/50 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all"
        />
        {errors.name && (
          <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-text-dark mb-1.5">
          {t('form.email')}
        </label>
        <input
          id="email"
          type="email"
          {...register('email', {
            required: t('validation.emailRequired'),
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: t('validation.emailInvalid'),
            },
          })}
          className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm text-text-dark placeholder-text-light/50 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all"
        />
        {errors.email && (
          <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-text-dark mb-1.5">
          {t('form.subject')}
        </label>
        <input
          id="subject"
          type="text"
          {...register('subject', { required: t('validation.subjectRequired') })}
          className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm text-text-dark placeholder-text-light/50 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all"
        />
        {errors.subject && (
          <p className="mt-1 text-xs text-red-500">{errors.subject.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-text-dark mb-1.5">
          {t('form.message')}
        </label>
        <textarea
          id="message"
          rows={5}
          {...register('message', {
            required: t('validation.messageRequired'),
            minLength: { value: 10, message: t('validation.messageMin') },
          })}
          className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm text-text-dark placeholder-text-light/50 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all resize-none"
        />
        {errors.message && (
          <p className="mt-1 text-xs text-red-500">{errors.message.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={status === 'sending'}
        className="btn-primary w-full flex items-center justify-center gap-2"
      >
        {status === 'sending' ? (
          t('form.sending')
        ) : (
          <>
            <Send className="h-4 w-4" />
            {t('form.send')}
          </>
        )}
      </button>

      {status === 'success' && (
        <div className="flex items-center gap-2 rounded-lg bg-success/10 p-4 text-sm text-success">
          <CheckCircle className="h-5 w-5 shrink-0" />
          {t('form.success')}
        </div>
      )}

      {status === 'error' && (
        <div className="flex items-center gap-2 rounded-lg bg-red-50 p-4 text-sm text-red-600">
          <AlertCircle className="h-5 w-5 shrink-0" />
          {t('form.error')}
        </div>
      )}
    </form>
  );
}
