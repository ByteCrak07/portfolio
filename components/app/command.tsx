'use client';

import { FC, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  BookOpen,
  BrainCircuit,
  CornerDownRight,
  FolderGit2,
  GraduationCap,
  MessagesSquare,
  ScrollText,
  Search,
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
import { analyticsEvent } from './analytics';

const Command: FC<{ iconOnly?: boolean }> = ({ iconOnly }) => {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  // to open command dialog on pressing cmd+k
  useEffect(() => {
    if (iconOnly) return;

    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
        analyticsEvent('open_search_command', {
          category: 'Search',
        });
      }
    };

    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, [iconOnly]);

  const openCommand = () => {
    setOpen(true);
    analyticsEvent('open_search_btn', {
      category: 'Search',
    });
  };

  const selectCommand = (link: string, newTab?: boolean) => {
    setOpen(false);

    if (!newTab) router.replace(link, { scroll: false });
    else window.open(link, '_blank');
  };

  const openSkills = () => {
    setOpen(false);
    const skillsBtn = document.getElementById('skills-btn');
    skillsBtn?.click();
  };

  const openResume = () => {
    setOpen(false);
    const resumeBtn = document.getElementById('resume-btn');
    resumeBtn?.click();
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

  const blogs = [
    {
      name: 'Email contact form using NextJS (App router)',
      link: 'https://blog.abilsavio.tech/email-contact-form-using-nextjs-app-router',
    },
    {
      name: 'Pocketbase OAuth on NextJS',
      link: 'https://blog.abilsavio.tech/pocketbase-oauth-on-nextjs',
    },
  ];

  return (
    <div>
      {!iconOnly ? (
        <button
          className='rounded border border-slate-700 bg-black px-3 py-2 text-sm outline-none hover:bg-muted focus:outline-none'
          onClick={openCommand}
        >
          <Search className='mr-2 inline h-4 w-4' />
          Search this page...&nbsp;&nbsp;&nbsp;
          <kbd className='pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100'>
            <span className='text-xs'>⌘</span>K
          </kbd>
        </button>
      ) : (
        <button
          className='flex items-center outline-none focus:outline-none'
          onClick={openCommand}
        >
          <Search className='mr-3 h-8 w-8' />
        </button>
      )}
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
            <CommandItem onSelect={openSkills}>
              <BrainCircuit className='mr-3 h-8 w-8' />
              <span>Skills</span>
            </CommandItem>
            <CommandItem onSelect={openResume}>
              <GraduationCap className='mr-3 h-8 w-8' />
              <span>Resume</span>
            </CommandItem>
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
          <CommandGroup heading='Blogs'>
            {blogs.map((blog, i) => (
              <CommandItem
                key={`blog-${i}`}
                onSelect={() => selectCommand(blog.link, true)}
              >
                <CornerDownRight className='mr-2 h-4 w-4' />
                <span>{blog.name}</span>
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </div>
  );
};

export default Command;
