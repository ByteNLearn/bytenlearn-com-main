import { SiPython, SiC, SiHtml5, SiMongodb } from 'react-icons/si';
import { FaDatabase } from 'react-icons/fa';

export const handbooks = [
    {
        id: 'python',
        title: 'Python Handbook',
        icon: SiPython,
        color: '#3776AB', // Python Blue
        bgColor: 'bg-[#3776AB]/10',
        borderColor: 'border-[#3776AB]/20',
        link: '/handbooks/python-handbook.pdf'
    },
    {
        id: 'c',
        title: 'C Handbook',
        icon: SiC,
        color: '#A8B9CC', // C Blueish
        bgColor: 'bg-[#00599C]/10',
        borderColor: 'border-[#00599C]/20',
        link: '/handbooks/c-handbook.pdf'
    },
    {
        id: 'html',
        title: 'HTML Handbook',
        icon: SiHtml5,
        color: '#E34F26', // HTML Orange
        bgColor: 'bg-[#E34F26]/10',
        borderColor: 'border-[#E34F26]/20',
        link: '/handbooks/html-handbook.pdf'
    },
    {
        id: 'sql',
        title: 'SQL Handbook',
        icon: FaDatabase,
        color: '#00758F',
        bgColor: 'bg-[#00758F]/10',
        borderColor: 'border-[#00758F]/20',
        link: '/handbooks/sql-handbook.pdf'
    },
    {
        id: 'mongodb',
        title: 'MongoDB Handbook',
        icon: SiMongodb,
        color: '#47A248', // Mongo Green
        bgColor: 'bg-[#47A248]/10',
        borderColor: 'border-[#47A248]/20',
        link: '/handbooks/mongodb-handbook.pdf'
    }
];
