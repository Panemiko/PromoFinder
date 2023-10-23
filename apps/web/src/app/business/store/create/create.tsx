'use client'

import {zodResolver} from '@hookform/resolvers/zod'
import { z } from "zod"
import {storeNameSchema} from '@promofinder/validation'
import { useForm } from "react-hook-form/dist"
import { Form, FormField, FormItem, FormLabel } from '@/components/ui/form'

const formSchema = z.object({
    name: storeNameSchema,
})

export function CreateStoreForm() {
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: ''
        }
    })

    return <Form>
        <FormField control={form.control} name='name' render={() => (
            <FormItem>
                <FormLabel></FormLabel>
            </FormItem>
        )} />
    </Form>
}