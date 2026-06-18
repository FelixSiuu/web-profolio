import { Card, CardAction, CardAvatar, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from './ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Separator } from './ui/separator'
import AboutMe from './aboutMe'
import { Mail, Phone } from 'lucide-react'

export default function MyHeader() {
  return (
    <header>
      <Card>
        <CardHeader>
          {/* left column */}
          <CardTitle>Felix Siu</CardTitle>
          <CardDescription>Front-end developer</CardDescription>
          <CardContent>
            <AboutMe />
          </CardContent>

          {/* right column */}
          <CardAvatar>
            <Avatar size="2xl">
              <AvatarImage src="/images/avatar_felixsiu.jpeg" />
              <AvatarFallback>Felix</AvatarFallback>
            </Avatar>
          </CardAvatar>
          <CardAction className="hidden">
            <Button>Contact</Button>
          </CardAction>
        </CardHeader>

        <CardFooter>
          <a href="tel:+852 68455092">
            <Phone className="inline-block h-4 w-4" /> +852 68455092
          </a>
          <Separator orientation="vertical" className="mx-3" />
          <a href="mailto:b1044327634@gmail.com">
            <Mail className="inline-block h-4 w-4" /> b1044327634@gmail.com
          </a>
        </CardFooter>
      </Card>
    </header>
  )
}
