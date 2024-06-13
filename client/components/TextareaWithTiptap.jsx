import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { Label } from "@/components/ui/label";

const TextareaWithTiptap = ({ id, label, value, onChange = () => {} }) => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: value,
    onUpdate: ({ editor }) => {
      const html = editor.getHTML();
      onChange(html);
    },
  });

  return (
    <div>
      <Label htmlFor={id} className="text-gray-900 dark:text-gray-200">{label}</Label>
      <EditorContent editor={editor} id={id} className="w-full dark:bg-gray-700 dark:text-gray-200 tiptap-editor" />
    </div>
  );
};

export default TextareaWithTiptap;
