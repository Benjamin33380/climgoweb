'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Image from '@tiptap/extension-image'
import Link from '@tiptap/extension-link'
import { TextStyle } from '@tiptap/extension-text-style'
import { Color } from '@tiptap/extension-color'
import { 
  Bold, 
  Italic, 
 
  Strikethrough, 
  Code, 
  Quote, 
  List, 
  ListOrdered, 
  Heading1, 
  Heading2, 
  Heading3,
  Image as ImageIcon,
  Link as LinkIcon,
  Undo,
  Redo
} from 'lucide-react'
import { useState } from 'react'

interface RichTextEditorProps {
  content: string
  onChange: (content: string) => void
  placeholder?: string
}

export default function RichTextEditor({ content, onChange, placeholder: _placeholder = "Commencez à écrire..." }: RichTextEditorProps) {
  const [showLinkDialog, setShowLinkDialog] = useState(false)
  const [linkUrl, setLinkUrl] = useState('')

  const editor = useEditor({
    extensions: [
      StarterKit,
      Image.configure({
        HTMLAttributes: {
          class: 'max-w-full h-auto rounded-lg',
        },
      }),
      Link.configure({
        openOnClick: false,
        HTMLAttributes: {
          class: 'text-[#F97316] hover:text-[#03144A] underline',
        },
      }),
      TextStyle,
      Color,
    ],
    content,
    immediatelyRender: false,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML())
    },
    editorProps: {
      attributes: {
        class: 'prose prose-lg max-w-none focus:outline-none min-h-[400px] p-4',
      },
    },
  })

  if (!editor) return null

  const addImage = () => {
    const url = window.prompt('URL de l\'image:')
    if (url) {
      editor.chain().focus().setImage({ src: url }).run()
    }
  }

  const addLink = () => {
    const url = linkUrl
    if (url) {
      editor.chain().focus().setLink({ href: url }).run()
      setLinkUrl('')
      setShowLinkDialog(false)
    }
  }

  const removeLink = () => {
    editor.chain().focus().unsetLink().run()
  }

  return (
    <div className="border border-gray-200 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 overflow-hidden">
      {/* Toolbar */}
      <div className="border-b border-gray-200 dark:border-gray-600 p-3 flex flex-wrap gap-1 bg-gray-50 dark:bg-gray-700">
        {/* History */}
        <div className="flex border-r border-gray-300 dark:border-gray-500 pr-2 mr-2">
          <button
            onClick={() => editor.chain().focus().undo().run()}
            disabled={!editor.can().undo()}
            className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed"
            title="Annuler"
          >
            <Undo className="w-4 h-4" />
          </button>
          <button
            onClick={() => editor.chain().focus().redo().run()}
            disabled={!editor.can().redo()}
            className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed"
            title="Rétablir"
          >
            <Redo className="w-4 h-4" />
          </button>
        </div>

        {/* Headings */}
        <div className="flex border-r border-gray-300 dark:border-gray-500 pr-2 mr-2">
          <button
            onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
            className={`p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-600 ${
              editor.isActive('heading', { level: 1 }) ? 'bg-[#F97316] text-white' : ''
            }`}
            title="Titre 1"
          >
            <Heading1 className="w-4 h-4" />
          </button>
          <button
            onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
            className={`p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-600 ${
              editor.isActive('heading', { level: 2 }) ? 'bg-[#F97316] text-white' : ''
            }`}
            title="Titre 2"
          >
            <Heading2 className="w-4 h-4" />
          </button>
          <button
            onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
            className={`p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-600 ${
              editor.isActive('heading', { level: 3 }) ? 'bg-[#F97316] text-white' : ''
            }`}
            title="Titre 3"
          >
            <Heading3 className="w-4 h-4" />
          </button>
        </div>

        {/* Text formatting */}
        <div className="flex border-r border-gray-300 dark:border-gray-500 pr-2 mr-2">
          <button
            onClick={() => editor.chain().focus().toggleBold().run()}
            className={`p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-600 ${
              editor.isActive('bold') ? 'bg-[#F97316] text-white' : ''
            }`}
            title="Gras"
          >
            <Bold className="w-4 h-4" />
          </button>
          <button
            onClick={() => editor.chain().focus().toggleItalic().run()}
            className={`p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-600 ${
              editor.isActive('italic') ? 'bg-[#F97316] text-white' : ''
            }`}
            title="Italique"
          >
            <Italic className="w-4 h-4" />
          </button>
          <button
            onClick={() => editor.chain().focus().toggleStrike().run()}
            className={`p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-600 ${
              editor.isActive('strike') ? 'bg-[#F97316] text-white' : ''
            }`}
            title="Barré"
          >
            <Strikethrough className="w-4 h-4" />
          </button>
          <button
            onClick={() => editor.chain().focus().toggleCode().run()}
            className={`p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-600 ${
              editor.isActive('code') ? 'bg-[#F97316] text-white' : ''
            }`}
            title="Code"
          >
            <Code className="w-4 h-4" />
          </button>
        </div>

        {/* Lists */}
        <div className="flex border-r border-gray-300 dark:border-gray-500 pr-2 mr-2">
          <button
            onClick={() => editor.chain().focus().toggleBulletList().run()}
            className={`p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-600 ${
              editor.isActive('bulletList') ? 'bg-[#F97316] text-white' : ''
            }`}
            title="Liste à puces"
          >
            <List className="w-4 h-4" />
          </button>
          <button
            onClick={() => editor.chain().focus().toggleOrderedList().run()}
            className={`p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-600 ${
              editor.isActive('orderedList') ? 'bg-[#F97316] text-white' : ''
            }`}
            title="Liste numérotée"
          >
            <ListOrdered className="w-4 h-4" />
          </button>
          <button
            onClick={() => editor.chain().focus().toggleBlockquote().run()}
            className={`p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-600 ${
              editor.isActive('blockquote') ? 'bg-[#F97316] text-white' : ''
            }`}
            title="Citation"
          >
            <Quote className="w-4 h-4" />
          </button>
        </div>

        {/* Media */}
        <div className="flex">
          <button
            onClick={addImage}
            className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-600"
            title="Ajouter une image"
          >
            <ImageIcon className="w-4 h-4" />
          </button>
          
          {showLinkDialog ? (
            <div className="flex items-center space-x-2 ml-2">
              <input
                type="url"
                placeholder="https://..."
                value={linkUrl}
                onChange={(e) => setLinkUrl(e.target.value)}
                className="px-2 py-1 text-sm border border-gray-300 dark:border-gray-500 rounded bg-white dark:bg-gray-800"
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault()
                    addLink()
                  }
                  if (e.key === 'Escape') {
                    setShowLinkDialog(false)
                    setLinkUrl('')
                  }
                }}
                autoFocus
              />
              <button
                onClick={addLink}
                className="px-2 py-1 text-sm bg-[#F97316] text-white rounded hover:bg-[#03144A]"
              >
                OK
              </button>
              <button
                onClick={() => {
                  setShowLinkDialog(false)
                  setLinkUrl('')
                }}
                className="px-2 py-1 text-sm border border-gray-300 dark:border-gray-500 rounded"
              >
                Annuler
              </button>
            </div>
          ) : (
            <button
              onClick={() => {
                if (editor.isActive('link')) {
                  removeLink()
                } else {
                  setShowLinkDialog(true)
                }
              }}
              className={`p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-600 ${
                editor.isActive('link') ? 'bg-[#F97316] text-white' : ''
              }`}
              title={editor.isActive('link') ? 'Supprimer le lien' : 'Ajouter un lien'}
            >
              <LinkIcon className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Editor */}
      <div className="min-h-[400px] bg-white dark:bg-gray-800 text-gray-900 dark:text-white">
        <EditorContent 
          editor={editor} 
          className="prose prose-lg max-w-none dark:prose-invert focus:outline-none"
        />
      </div>
    </div>
  )
}
