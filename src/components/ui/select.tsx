"use client"

import * as React from "react"

interface SelectProps {
  value?: string;
  onValueChange?: (value: string) => void;
  children: React.ReactNode;
  placeholder?: string;
  className?: string;
}

interface SelectTriggerProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

interface SelectContentProps {
  children: React.ReactNode;
  className?: string;
  isOpen?: boolean;
}

interface SelectItemProps {
  value: string;
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const Select = React.forwardRef<HTMLDivElement, SelectProps>(
  ({ value: _value, onValueChange: _onValueChange, children, className, ...props }, ref) => {
    return (
      <div ref={ref} className={className} {...props}>
        {children}
      </div>
    )
  }
)
Select.displayName = "Select"

const SelectTrigger = React.forwardRef<HTMLButtonElement, SelectTriggerProps>(
  ({ children, className, onClick, ...props }, ref) => {
    return (
      <button
        ref={ref}
        type="button"
        onClick={onClick}
        className={`
          flex h-10 w-full items-center justify-between rounded-md 
          border border-input bg-background px-3 py-2 text-sm 
          ring-offset-background placeholder:text-muted-foreground 
          focus:outline-none focus:ring-2 focus:ring-ring 
          focus:ring-offset-2 disabled:cursor-not-allowed 
          disabled:opacity-50
          ${className || ''}
        `}
        {...props}
      >
        {children}
        <svg className="h-4 w-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
    )
  }
)
SelectTrigger.displayName = "SelectTrigger"

const SelectValue = React.forwardRef<HTMLSpanElement, { children?: React.ReactNode; placeholder?: string }>(
  ({ children, placeholder, ...props }, ref) => {
    return (
      <span ref={ref} {...props}>
        {children || placeholder}
      </span>
    )
  }
)
SelectValue.displayName = "SelectValue"

const SelectContent = React.forwardRef<HTMLDivElement, SelectContentProps>(
  ({ children, className, isOpen, ...props }, ref) => {
    if (!isOpen) return null;
    
    return (
      <div
        ref={ref}
        className={`
          relative z-50 max-h-96 min-w-[8rem] overflow-hidden 
          rounded-md border bg-popover text-popover-foreground 
          shadow-md
          ${className || ''}
        `}
        {...props}
      >
        {children}
      </div>
    )
  }
)
SelectContent.displayName = "SelectContent"

const SelectItem = React.forwardRef<HTMLDivElement, SelectItemProps>(
  ({ children, value: _value, onClick, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        onClick={onClick}
        className={`
          relative flex w-full cursor-default select-none items-center 
          rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none 
          hover:bg-accent hover:text-accent-foreground
          ${className || ''}
        `}
        {...props}
      >
        {children}
      </div>
    )
  }
)
SelectItem.displayName = "SelectItem"

export {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} 