import React from 'react'
import { z } from "zod"
import {
  FormControl,
  FormField,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Control } from 'react-hook-form'
import { authFormSchema } from '@/lib/utils'

import { FieldPath } from 'react-hook-form';

const formSchema = authFormSchema('sign-up')

interface CustomInputProps {
  control: Control<z.infer<typeof formSchema>>,
  name: FieldPath<z.infer<typeof formSchema>>,
  label: string,
  placeholder: string
}

const CustomInput = ({ control, name, label, placeholder }: CustomInputProps) => {
  return (
    <FormField
    control={control}
    name={name}
    render={({ field }) => (
      <div className='form-item'>
        <FormLabel className='form-label'>
          {label}
        </FormLabel>
        <div className='flex w-full flex-col'>
          <FormControl>
            <Input placeholder={placeholder}
            type = {name === 'password' ? 'password' : 'text'}
            className='input-class'
              {...field}
            />
          </FormControl>
          <FormMessage className='form-message mt-2' />
        </div>
      </div>
    )}
  />
  )
}

export default CustomInput