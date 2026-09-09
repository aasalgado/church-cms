import { z } from "zod";

export const NonEmptyString = z.string().refine((s) => s.trim().length > 0, {
  message: "String must not be empty or whitespace",
});

const isValidAbsoluteUrl = (v: string) => {
  try {
    // will throw for invalid absolute URLs
    const u = new URL(v);
    return u.protocol === "http:" || u.protocol === "https:";
  } catch {
    return false;
  }
};

const isRelativePath = (v: string) => v.startsWith("/");
const isAnchor = (v: string) => v.startsWith("#");

export const Href = z
  .string()
  .refine((v) => v.trim().length > 0, { message: "href must not be empty" })
  .refine((v) => isAnchor(v) || isRelativePath(v) || isValidAbsoluteUrl(v), {
    message: "href must be an anchor, relative path, or valid absolute URL",
  });

export const ImageSchema = z.object({
  src: NonEmptyString.refine(
    (v) => isRelativePath(v) || isValidAbsoluteUrl(v),
    {
      message: "image src must be a relative path or an absolute URL",
    },
  ),
  alt: NonEmptyString,
});

export const CtaSchema = z.object({
  enabled: z.boolean(),
  label: NonEmptyString,
  href: Href,
});

export const LinkSchema = z.object({
  label: NonEmptyString,
  href: Href,
});

export const Enabled = z.boolean();

export const Timestamp = z.string().datetime();

export type NonEmptyString = z.infer<typeof NonEmptyString>;
export type Href = z.infer<typeof Href>;
export type Image = z.infer<typeof ImageSchema>;
export type Cta = z.infer<typeof CtaSchema>;
export type Link = z.infer<typeof LinkSchema>;
