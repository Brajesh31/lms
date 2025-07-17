'use client'

import { Search } from "lucide-react";
import { useRouter } from "next/navigation"
import { useState } from "react";

function SearchInput() {
    const router = useRouter();
    const [searchQuery, setSearchQuery] = useState("")
  return (
    
    <form className="relative">
        <input 
        type="text" 
        placeholder="Search for books"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className='w-full rounded-full bg-secondary/80 px-4 py-2 pl-10 text-sm focus:outline-none 
        focus:ring-2 focus:ring-primary '
        />
        <Search className="absolute left-3 h-4 w-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
    </form>
  )
}

export default SearchInput