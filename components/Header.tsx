import React from 'react'
import { Button } from './ui/button'
import DarkModeToggle from './DarkModeToggel'
import Link from 'next/link'
import { BookMarkedIcon, BookOpen } from 'lucide-react'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
import SearchInput from './SearchInput'

function Header() {
  return (
    
    <header className="sticky top-0 z-10 
       bg-background/80 backdrop-blur-sm border-b border-border">
        <div className='container mx-auto px-4'>
          <div className='flex h-16 items-center justify-between gap-4'>
            
            {/* left */}
            <div className='flex  items-center gap-4'>
              <Link 
                href='/'
                prefetch={false}
                className='flex items-center space-x-2 hover:opacity-90 transition-opacity'
                >
              <BookOpen className='h-6 w-6 text-primary' />
              <span className='text-xl font-bold bg-gradient-to-r from-primary/90 to-primary bg-clip-text text-transparent'>
              Bookshelf
              </span>
              </Link>
              <SearchInput />
              {/* <SearchInput />    */}
            </div>
            {/* right */}
            <div className='flex h-16 items-center md-space-x-2'>
              <nav>
                <SignedIn>
                  <Link 
                    prefetch={false}
                    href='/my-Courses'
                    className='flex items-center space-x-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors
                    md:border md-border-border md:rounded-md md:px-4 md:py-2 '
                    >
                    <BookMarkedIcon className='h-4 w-4' />
                    <span className='hidden md:block'>My Courses</span>
                  </Link>
                  </SignedIn>
              </nav>
              <DarkModeToggle />
              <SignedIn>
                <UserButton />
              </SignedIn>
              
              <SignedOut>
                <SignInButton mode='modal'> 
                  <Button variant='outline' size='sm'>
                    Sign in
                    </Button>
                </SignInButton>
              </SignedOut>  
            </div>
          </div>
        
        </div>
    </header>
  )
}

export default Header