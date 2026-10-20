import { Card, CardAction, CardAvatar, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from './ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Separator } from './ui/separator'
import AboutMe from './aboutMe'
import { Mail, Phone } from 'lucide-react'
import { avatarService, contactService } from '@/services/myInfo.service'
import { Buffer } from 'node:buffer'

const getAvatarDataUrl = async (): Promise<string | null> => {
  try {
    const avatarBlob = await avatarService.getAvatar()
    const mimeType = avatarBlob.type || 'image/jpeg'

    // The avatar endpoint may return JSON errors in some environments.
    if (!mimeType.startsWith('image/')) return null

    const imageBuffer = Buffer.from(await avatarBlob.arrayBuffer())
    return `data:${mimeType};base64,${imageBuffer.toString('base64')}`
  } catch {
    return null
  }
}

export default async function MyHeader() {
  const [contactResponse, avatarSrc] = await Promise.all([contactService.getContact().catch(() => null), getAvatarDataUrl()])

  const contact = contactResponse?.isSuccess ? contactResponse.data : null
  const publicMap = contact?.publicMap
  const displayName = publicMap?.displayName && contact?.displayName ? contact.displayName : 'Siu Chi Fai'
  const phone = contact?.phone ?? ''
  const email = contact?.email ?? ''
  const showPhone = Boolean(publicMap?.phone && phone)
  const showEmail = Boolean(publicMap?.email && email)

  return (
    <header>
      <Card>
        <CardHeader>
          {/* left column */}
          <CardTitle>{displayName}</CardTitle>
          <CardContent>
            <AboutMe />
          </CardContent>

          {/* right column */}
          <CardAvatar>
            <Avatar size="2xl">
              <AvatarImage src={avatarSrc ?? '/images/avatar_felixsiu.jpeg'} />
              <AvatarFallback>Felix</AvatarFallback>
            </Avatar>
          </CardAvatar>
          <CardAction className="hidden">
            <Button>Contact</Button>
          </CardAction>
        </CardHeader>

        {(showPhone || showEmail) && (
          <CardFooter>
            {showPhone && (
              <a href={`tel:${phone.replace(/\s+/g, '')}`}>
                <Phone className="inline-block h-4 w-4" /> {phone}
              </a>
            )}
            {showPhone && showEmail && <Separator orientation="vertical" className="mx-3" />}
            {showEmail && (
              <a href={`mailto:${email}`}>
                <Mail className="inline-block h-4 w-4" /> {email}
              </a>
            )}
          </CardFooter>
        )}
      </Card>
    </header>
  )
}
