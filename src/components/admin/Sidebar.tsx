'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useSession, signOut } from 'next-auth/react'
import {
  LayoutDashboard,
  FileText,
  Users,
  MessageSquare,
  Mail,
  Settings,
  LogOut,
  Receipt,
  FileCheck,
  UserCheck,
  FolderOpen,
  Shield,
  Package
} from 'lucide-react'

const navigation = [
  {
    name: 'Dashboard',
    href: '/admin',
    icon: LayoutDashboard,
  },
  {
    name: 'Clients',
    href: '/admin/clients',
    icon: UserCheck,
  },
  {
    name: 'Catalogue',
    href: '/admin/catalog',
    icon: Package,
  },
  {
    name: 'Devis',
    href: '/admin/quotes',
    icon: FileCheck,
  },
  {
    name: 'Factures',
    href: '/admin/invoices',
    icon: Receipt,
  },
  {
    name: 'Projets',
    href: '/admin/projects',
    icon: FolderOpen,
  },
  {
    name: 'Articles',
    href: '/admin/posts',
    icon: FileText,
  },
  {
    name: 'Utilisateurs',
    href: '/admin/users',
    icon: Users,
  },
  {
    name: 'Commentaires',
    href: '/admin/comments',
    icon: MessageSquare,
  },
  {
    name: 'Contacts',
    href: '/admin/contacts',
    icon: Mail,
  },
  {
    name: 'Sécurité',
    href: '/admin/security',
    icon: Shield,
  },
  {
    name: 'Paramètres',
    href: '/admin/settings',
    icon: Settings,
  },
]

export function Sidebar() {
  const pathname = usePathname()
  const { data: session } = useSession()

  return (
    <div className="w-64 bg-card border-r flex flex-col">
      <div className="p-6">
        <h2 className="text-lg font-semibold">Admin ClimGO</h2>
        <p className="text-sm text-muted-foreground">
          {session?.user?.name}
        </p>
      </div>
      
      <nav className="flex-1 px-4 space-y-1">
        {navigation.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`
                flex items-center px-3 py-2 text-sm rounded-md transition-colors
                ${isActive 
                  ? 'bg-primary text-primary-foreground' 
                  : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                }
              `}
            >
              <item.icon className="h-4 w-4 mr-3" />
              {item.name}
            </Link>
          )
        })}
      </nav>
      
      <div className="p-4 border-t">
        <button
          onClick={() => signOut()}
          className="flex items-center w-full px-3 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground rounded-md transition-colors"
        >
          <LogOut className="h-4 w-4 mr-3" />
          Déconnexion
        </button>
      </div>
    </div>
  )
}
