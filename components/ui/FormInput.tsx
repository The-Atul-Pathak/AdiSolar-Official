import type { InputHTMLAttributes, TextareaHTMLAttributes, SelectHTMLAttributes, ReactNode } from "react";

/* ─── Shared styles ──────────────────────────────────────────────────────── */
const inputBase =
  "w-full px-4 py-3 rounded-none border border-border bg-white text-text-primary placeholder:text-text-tertiary focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 text-sm";

/* ─── FormLabel ──────────────────────────────────────────────────────────── */
export interface FormLabelProps {
  htmlFor: string;
  children: ReactNode;
  required?: boolean;
}

export function FormLabel({ htmlFor, children, required }: FormLabelProps) {
  return (
    <label htmlFor={htmlFor} className="block text-sm font-medium text-text-primary mb-1.5">
      {children}
      {required && (
        <span className="text-error ml-1" aria-hidden="true">*</span>
      )}
    </label>
  );
}

/* ─── FormInput ──────────────────────────────────────────────────────────── */
export interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  wrapperClassName?: string;
}

export function FormInput({
  id,
  label,
  error,
  wrapperClassName = "",
  required,
  className = "",
  ...props
}: FormInputProps) {
  return (
    <div className={`flex flex-col ${wrapperClassName}`}>
      {label && id && (
        <FormLabel htmlFor={id} required={required}>
          {label}
        </FormLabel>
      )}
      <input
        id={id}
        required={required}
        aria-invalid={error ? "true" : undefined}
        aria-describedby={error && id ? `${id}-error` : undefined}
        className={`${inputBase} ${error ? "border-error focus:ring-error" : ""} ${className}`}
        {...props}
      />
      {error && id && (
        <p id={`${id}-error`} className="mt-1.5 text-xs text-error" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

/* ─── FormTextarea ───────────────────────────────────────────────────────── */
export interface FormTextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  wrapperClassName?: string;
}

export function FormTextarea({
  id,
  label,
  error,
  wrapperClassName = "",
  required,
  rows = 4,
  className = "",
  ...props
}: FormTextareaProps) {
  return (
    <div className={`flex flex-col ${wrapperClassName}`}>
      {label && id && (
        <FormLabel htmlFor={id} required={required}>
          {label}
        </FormLabel>
      )}
      <textarea
        id={id}
        required={required}
        rows={rows}
        aria-invalid={error ? "true" : undefined}
        aria-describedby={error && id ? `${id}-error` : undefined}
        className={`${inputBase} resize-y min-h-[100px] ${error ? "border-error focus:ring-error" : ""} ${className}`}
        {...props}
      />
      {error && id && (
        <p id={`${id}-error`} className="mt-1.5 text-xs text-error" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

/* ─── FormSelect ─────────────────────────────────────────────────────────── */
export interface SelectOption {
  value: string;
  label: string;
}

export interface FormSelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  options: SelectOption[];
  placeholder?: string;
  wrapperClassName?: string;
}

export function FormSelect({
  id,
  label,
  error,
  options,
  placeholder,
  wrapperClassName = "",
  required,
  className = "",
  ...props
}: FormSelectProps) {
  return (
    <div className={`flex flex-col ${wrapperClassName}`}>
      {label && id && (
        <FormLabel htmlFor={id} required={required}>
          {label}
        </FormLabel>
      )}
      <select
        id={id}
        required={required}
        aria-invalid={error ? "true" : undefined}
        aria-describedby={error && id ? `${id}-error` : undefined}
        className={`${inputBase} appearance-none cursor-pointer ${error ? "border-error focus:ring-error" : ""} ${className}`}
        {...props}
      >
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      {error && id && (
        <p id={`${id}-error`} className="mt-1.5 text-xs text-error" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
