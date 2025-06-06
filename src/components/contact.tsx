"use client"

import Button from "./button";
import { useForm, SubmitHandler } from "react-hook-form";
import { useEffect, useState } from "react";
import { sendMail } from "@/lib/send-email";

type Inputs = {
    name: string,
    email: string,
    message: string,
    marketing: boolean,
    trade: boolean
}

const Contact = () => {
    const [showAlert, setShowAlert] = useState(false);
    const {
        register,
        handleSubmit,
        reset,
        formState: {errors, isSubmitSuccessful},
    } = useForm<Inputs>({
        mode: "onBlur"
    })
    const onSubmit: SubmitHandler<Inputs> = (data) => {
        // Handle proper submit here
        sendMail({from: "no-reply@a1express.pl", to: "biuro@a1express.pl",subject: "Formularz kontaktowy od A1Express", type: "contact", message: data.message, Contactemail: data.email, name: data.name})
        console.log(data);
        reset()    
    };
    
    const validations = {
        name: {
            required: "To pole jest wymagane",
            minLength: {
                value: 3,
                message: "Nazwa musi mieć minimum 3 znaki"
            },
            maxLength: {
                value: 40,
                message: "Nazwa nie może mieć więcej niż 40 znaków"
            }
        },
        email: {
            required: "To pole jest wymagane",
            maxLength: {
                value: 40,
                message: "Email / numer telefonu nie może mieć więcej niż 40 znaków"
            }
        },
        message: {
            required: "To pole jest wymagane",
            minLength: {
                value: 5,
                message: "Wiadomość musi mieć minimum 5 znaków"
            },
            maxLength: {
                value: 500,
                message: "Wiadomość nie może mieć więcej niż 500 znaków"
            }
        },
        trade: {
            required: "Zgoda na przetwarzanie danych osobowych jest wymagana, abyśmy mogli się z Tobą skontaktować",
            validate: (value:boolean) => value === true || "Zgoda na przetwarzanie danych osobowych jest wymagana, abyśmy mogli się z Tobą skontaktować"
        },
        marketing: {
            required: "Zgoda marketingowa jest wymagana, abyśmy mogli się z Tobą skontaktować w przyszłości",
        }
    }
    useEffect(()=> {
        if (isSubmitSuccessful) {
            setShowAlert(true);
            const timer = setTimeout(()=> {
                setShowAlert(false)
            }, 5000)
            return () => clearTimeout(timer)
        }
    }, [isSubmitSuccessful])
    
    return (
        <div className="min-w-[90%] md:min-w-[50%]">
            <form className="flex items-start justify-center flex-col gap-8" onSubmit={handleSubmit(onSubmit)}>
                <div className="sm:col-span-2 text-center min-w-[50%]">
                    <label htmlFor="name" className="block text-start text-sm font-medium text-[var(--secondary-header-color)] ">Imię i nazwisko / Nazwa firmy</label>
                    <div className="mt-2">
                        <input autoComplete="name" type="text" id="name" {...register("name", validations.name)} className="border border-gray-300 block w-full rounded-md py-3 px-4 shadow-sm focus:border-sky-500 focus:ring-sky-500" />
                        <span className="text-red-600">
                            {errors?.name && errors.name.message}
                        </span>
                    </div>
                </div>
                <div className="sm:col-span-2 min-w-[50%]">
                    <label htmlFor="email" className="block text-sm text-start font-medium text-[var(--secondary-header-color)] ">Email / Numer telefonu</label>
                    <div className="mt-2">
                        <input {...register("email", validations.email)} id="email"  type="text" autoComplete="email" className="border border-gray-300 block w-full rounded-md py-3 px-4 shadow-sm focus:border-sky-500 focus:ring-sky-500 " />
                        <span className="text-red-600">
                            {errors?.email && errors.email.message}
                        </span>
                    </div>
                </div>
                <div className="sm:col-span-2 w-[100%]">
                    <label htmlFor="message" className="block text-sm text-start font-medium text-[var(--secondary-header-color)] ">Wiadomość</label>
                    <div className="mt-2">
                        <textarea {...register("message", validations.message)}  id="message" rows={4} className="border border-gray-300 block w-full rounded-md py-3 px-4 shadow-sm focus:border-sky-500 focus:ring-sky-500 " />
                        <span className="text-red-600">
                            {errors?.message && errors.message.message}
                        </span>
                    </div>
                </div>
                <div className="sm:col-span-2 w-[100%]">
  <div className="mt-2 flex items-center gap-2">
    <input
      {...register("trade", validations.trade)}
      id="trade"
      type="checkbox"
      className="border border-gray-300 rounded-md shadow-sm focus:border-sky-500 focus:ring-sky-500"
    />
    <label htmlFor="trade" className="text-sm font-medium text-[var(--secondary-header-color)]">
      Oświadczam, że wyrażam zgodę na otrzymywanie informacji handlowych *
    </label>
  </div>
  <span className="text-red-600">
    {errors?.trade && errors.trade.message}
  </span>
</div>
<div className="sm:col-span-2 w-[100%]">
  <div className="mt-2 flex items-center gap-2">
    <input
      {...register("marketing", validations.marketing)}
      id="marketing"
      type="checkbox"
      className="border border-gray-300 rounded-md shadow-sm focus:border-sky-500 focus:ring-sky-500"
    />
    <label htmlFor="marketing" className="text-sm font-medium text-[var(--secondary-header-color)]">
      Oświadczam, że wyrażam zgodę na otrzymywanie informacji marketingowych *
    </label>
  </div>
  <span className="text-red-600" >
    {errors?.marketing && errors.marketing.message}
  </span>
</div>
                <div className="flex justify-end sm:col-span-2">
                    <Button type="submit" width="12rem">
                        Wyceń transport
                    </Button>
                </div>
                { showAlert &&
                <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 rounded-lg fixed top-16 text-left left-[10%]">
                    <p className="text-lg font-semibold">Status wiadomości: Wysłana</p>
                    <p>Twoja wiadomość została poprawnie wysłana.</p>
                </div>
                }       
                
            </form>
        </div>
    )
}

export {Contact}