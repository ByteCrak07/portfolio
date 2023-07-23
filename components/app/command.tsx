'use client';

import { FC, useEffect, useState } from 'react';
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

  const selectCommand = (link: string) => {
    setOpen(false);
    window.location.replace(link);
  };

  const suggestions = [
    {
      name: 'Bio',
      link: '/#',
      icon: <User className='mr-2 h-4 w-4' />,
    },
    {
      name: 'Projects',
      link: '/#projects',
      icon: <FolderGit2 className='mr-2 h-4 w-4' />,
    },
    {
      name: 'Experience',
      link: '/#experience',
      icon: <ScrollText className='mr-2 h-4 w-4' />,
    },
    {
      name: 'Blogs',
      link: '/#blogs',
      icon: <BookOpen className='mr-2 h-4 w-4' />,
    },
    {
      name: 'Contact',
      link: '/#contact',
      icon: <MessagesSquare className='mr-2 h-4 w-4' />,
    },
  ];

  const projects = [
    {
      name: 'Synchro.rs',
      link: '/#synchro.rs',
    },
    {
      name: 'KCART',
      link: '/#kcart',
    },
    {
      name: 'BingeWatch',
      link: '/#bingewatch',
    },
    {
      name: 'IEEE Website',
      link: '/#ieee-website',
    },
    {
      name: 'Agrify',
      link: '/#agrify',
    },
  ];

  const experiences = [
    {
      name: 'Buildbear Labs',
      link: '/#buildbear-labs',
    },
    {
      name: 'Cryptoliterature',
      link: '/#cryptoliterature',
    },
    {
      name: 'TATOS Technologies',
      link: '/#tatos-technologies',
    },
    {
      name: 'IEEE GEC THRISSUR',
      link: '/#ieee-gec-thrissur',
    },
  ];

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
            {suggestions.map((suggestion, i) => (
              <CommandItem
                key={`suggestion-${i}`}
                onSelect={() => selectCommand(suggestion.link)}
              >
                {suggestion.icon}
                <span>{suggestion.name}</span>
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading='Projects'>
            {projects.map((project, i) => (
              <CommandItem
                key={`project-${i}`}
                onSelect={() => selectCommand(project.link)}
              >
                <CornerDownRight className='mr-2 h-4 w-4' />
                <span>{project.name}</span>
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandGroup heading='Experience'>
            {experiences.map((experience, i) => (
              <CommandItem
                key={`experience-${i}`}
                onSelect={() => selectCommand(experience.link)}
              >
                <CornerDownRight className='mr-2 h-4 w-4' />
                <span>{experience.name}</span>
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </div>
  );
};

export default Command;
