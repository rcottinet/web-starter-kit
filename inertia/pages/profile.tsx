import { AppSidebar } from '~/components/app-sidebar'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
} from '~/components/ui/breadcrumb'
import { Separator } from '~/components/ui/separator'
import { SidebarInset, SidebarProvider, SidebarTrigger } from '~/components/ui/sidebar'
import { Head, router, usePage } from '@inertiajs/react'
import { ModeToggle } from '~/components/mode-toggle'
import { useState } from 'react'
import { Label } from '~/components/ui/label'
import { Input } from '~/components/ui/input'
import { cn } from '~/lib/utils'
import { Button } from '~/components/ui/button'
import { Toaster } from '~/components/ui/toaster'
import { useToast } from '~/hooks/use-toast'

type ProfileProps = {
  user: {
    name: string
    email: string
  }
  errors?: {
    name?: string
  }
  flash?: {
    success?: string
    error?: string
  }
}

export default function Profile() {
  const { user, errors, flash } = usePage<ProfileProps>().props
  const { toast } = useToast()

  const [values, setValues] = useState({
    name: user?.name ?? '',
  })

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setValues((values) => ({
      ...values,
      [e.target.id]: e.target.value,
    }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    router.post('/profile', values)
    if (flash?.error || errors.name) {
      return toast({
        title: 'Error',
        description: 'Please fill all required fields',
        variant: 'destructive',
      })
    }
    toast({
      title: 'Profile updated',
      description: 'Your profile has been updated successfully',
      className: 'bg-green-200 dark:bg-green-700',
    })
  }

  return (
    <>
      <Head title="Profile" />

      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
            <div className="flex items-center gap-2 px-4">
              <SidebarTrigger className="-ml-1" />
              <Separator orientation="vertical" className="mr-2 h-4" />
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem className="hidden md:block">
                    <BreadcrumbLink href="#">Profile</BreadcrumbLink>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
            <div>
              <ModeToggle />
            </div>
          </header>
          <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
            <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min">
              <div className={' m-5'}>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4 space-y-4">
                  {/*  update  name */}
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
                  {/*  submit button */}
                  <div className="flex justify-end">
                    <Button type="submit" className="w-full">
                      Save
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <Toaster />
        </SidebarInset>
      </SidebarProvider>
    </>
  )
}
