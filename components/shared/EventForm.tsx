"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { eventFormSchema } from "@/lib/validator"
import * as z from 'zod'
import { eventDefaultValues } from "@/constants"
import Dropdown from "./Dropdown"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"
import { FileUploader } from "./FileUploader"
import Image from "next/image"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Checkbox } from "../ui/checkbox"
import { useUploadThing } from '@/lib/uploadthing' 
import { createEvent } from "@/lib/actions/event.actions"

const formSchema = z.object({
    username: z.string().min(2, {
        message: "Имя пользователя должно быть меньше 2 символов"
    }),
})

type EventFormProps = {
    userId: string
    type: "Создать" | "Обновить"   
}

const EventForm = ({userId, type}: EventFormProps) => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            "username": "",
        },
      })
     
      function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values)
      }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-5">
        <div className="flex flex-col gap-5 md:flex-row">
            <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                    <FormItem className="w-full">
                    <FormControl>
                        <Input placeholder="shadcn" {...field} className="input-field"/>
                    </FormControl>
                    <FormDescription>
                        Это публичное имя
                    </FormDescription>
                    <FormMessage />
                    </FormItem>
                )}
            />
            <FormField
                control={form.control}
                name="categoryId"
                render={({ field }) => (
                    <FormItem className="w-full">
                    <FormControl>
                        <Dropdown onChangeHandler={field.onChange} value={field.value} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
            />
        </div>
        <Button type="submit">Отправить</Button>   {/*на 30 строке надо исправить*/}
      </form>
    </Form>
  )
}

export default EventForm