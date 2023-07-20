'use client';

import { FC, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useCommandState } from 'cmdk';
import {
  BookOpen,
  CornerDownRight,
  FolderGit2,
  MessagesSquare,
  ScrollText,
  User,
} from 'lucide-react';
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from '@/components/ui/command';

const Command: FC = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  let commandValue = '';

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  useEffect(() => {
    const commandAction = () => {
      setOpen(false);
      if (commandValue !== 'bio')
        router.push(`/#${commandValue.replace(/\s/g, '-')}`);
      else router.push('/');
    };

    const detectEnter = (e: KeyboardEvent) => {
      if (open && e.key === 'Enter') {
        commandAction();
      }
    };

    const detectClick = (e: MouseEvent) => {
      if (open) {
        commandAction();
      }
    };

    document.addEventListener('keydown', detectEnter);
    document.addEventListener('click', detectClick);
    return () => {
      document.removeEventListener('keydown', detectEnter);
      document.removeEventListener('click', detectClick);
    };
  }, [open, commandValue, router]);

  const CommandState = () => {
    const value = useCommandState((state) => state.value);
    commandValue = value;

    return null;
  };

  return (
    <div>
      <button
        className='rounded border border-slate-700 bg-black px-3 py-2 text-sm outline-none hover:bg-muted focus:outline-none'
        onClick={() => setOpen(true)}
      >
        Search this page...&nbsp;&nbsp;&nbsp;
        <kbd className='pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100'>
          <span className='text-xs'>⌘</span>K
        </kbd>
      </button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder='Type to search...' />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading='Suggestions'>
            <CommandItem>
              <User className='mr-2 h-4 w-4' />
              <span>Bio</span>
            </CommandItem>
            <CommandItem>
              <FolderGit2 className='mr-2 h-4 w-4' />
              <span>Projects</span>
            </CommandItem>
            <CommandItem>
              <ScrollText className='mr-2 h-4 w-4' />
              <span>Experience</span>
            </CommandItem>
            <CommandItem>
              <BookOpen className='mr-2 h-4 w-4' />
              <span>Blogs</span>
            </CommandItem>
            <CommandItem>
              <MessagesSquare className='mr-2 h-4 w-4' />
              <span>Contact</span>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading='Projects'>
            <CommandItem>
              <CornerDownRight className='mr-2 h-4 w-4' />
              <span>Synchro.rs</span>
            </CommandItem>
            <CommandItem>
              <CornerDownRight className='mr-2 h-4 w-4' />
              <span>KCART</span>
            </CommandItem>
            <CommandItem>
              <CornerDownRight className='mr-2 h-4 w-4' />
              <span>BingeWatch</span>
            </CommandItem>
            <CommandItem>
              <CornerDownRight className='mr-2 h-4 w-4' />
              <span>IEEE Website</span>
            </CommandItem>
            <CommandItem>
              <CornerDownRight className='mr-2 h-4 w-4' />
              <span>Agrify</span>
            </CommandItem>
          </CommandGroup>
          <CommandGroup heading='Experience'>
            <CommandItem>
              <CornerDownRight className='mr-2 h-4 w-4' />
              <span>Buildbear Labs</span>
            </CommandItem>
            <CommandItem>
              <CornerDownRight className='mr-2 h-4 w-4' />
              <span>Cryptoliterature</span>
            </CommandItem>
            <CommandItem>
              <CornerDownRight className='mr-2 h-4 w-4' />
              <span>TATOS Technologies</span>
            </CommandItem>
            <CommandItem>
              <CornerDownRight className='mr-2 h-4 w-4' />
              <span>IEEE GEC THRISSUR</span>
            </CommandItem>
          </CommandGroup>
          <CommandState />
        </CommandList>
      </CommandDialog>
    </div>
  );
};

export default Command;
