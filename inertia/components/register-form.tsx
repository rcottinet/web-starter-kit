import { cn } from '~/lib/utils'
import { Button } from '~/components/ui/button'
import { Input } from '~/components/ui/input'
import { Label } from '~/components/ui/label'
import { useState } from 'react'
import { router, usePage } from '@inertiajs/react'
import { PageProps } from '~/interfaces/page_props'

export function RegisterForm({ className, ...props }: React.ComponentPropsWithoutRef<'form'>) {
  const { errors } = usePage().props as PageProps

  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
  })

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const key = e.target.id
    const value = e.target.value
    setValues((values) => ({
      ...values,
      [key]: value,
    }))
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    router.post('/auth/register', values)
  }

  return (
    <div className="space-y-4">
      <form onSubmit={handleSubmit} className={cn('flex flex-col gap-6', className)} {...props}>
        <div className="flex flex-col items-center gap-2 text-center">
          <h1 className="text-2xl font-bold">Create an account</h1>
          <p className="text-balance text-sm text-muted-foreground">
            Enter your email below to create an account
          </p>
        </div>
        <div className="grid gap-6">
          <div className="grid gap-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              name="name"
              value={values.name}
              onChange={handleChange}
              placeholder="John Doe"
              required
              className={cn(errors.name && 'border-destructive')}
            />
            {errors.name && <p className="text-sm text-destructive">{errors.name}</p>}
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              placeholder="m@example.com"
              required
              className={cn(errors.email && 'border-destructive')}
            />
            {errors.email && <p className="text-sm text-destructive">{errors.email}</p>}
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              name="password"
              value={values.password}
              onChange={handleChange}
              required
              className={cn(errors.password && 'border-destructive')}
            />
            {errors.password && <p className="text-sm text-destructive">{errors.password}</p>}
          </div>
          <Button type="submit" className="w-full">
            Register
          </Button>
        </div>
      </form>
    </div>
  )
}
