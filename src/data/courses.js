export const courses = [
    {
        id: 1,
        title: 'HTML Tutorial',
        description: 'The word hypertext markup language is composed of the words "hypertext" and "markup". HTML is the standard markup language for documents designed to be displayed in a web browser.',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-16 h-16 text-[#e34c26]">
                <path d="M12 2L1.5 5L2.5 19L12 22L21.5 19L22.5 5L12 2ZM17.5 17L12 18.5L6.5 17L6 9H11V11H6.2L6.4 15.5L12 17L17.6 15.5L17.8 11H13V9H18L17.5 17Z" />
                <path d="M12 4L19.5 6L18.8 17.5L12 19.5V4Z" opacity="0.3" />
                <path d="M3.5 6L10 4V19.5L5.2 17.5L3.5 6Z" fillOpacity="0.5" />
                <path d="M12 18.55V16.9L16.65 15.7L16.85 11.2H12V9.6H17L18.5 6H5.5L5.65 7.6H10.4V9.2H4L4.35 15.7L12 18.55Z" fill="white" />
            </svg>
        ),
        slug: 'html',
        color: '#e34c26'
    },
    {
        id: 2,
        title: 'CSS Tutorial',
        description: 'CSS stands for Cascading Style Sheets. It describes how HTML elements are to be displayed on screen, paper, or in other media. CSS saves a lot of work.',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-16 h-16 text-[#2965f1]">
                <path d="M12 2L1.5 5L2.5 19L12 22L21.5 19L22.5 5L12 2ZM17.5 17L12 18.5L6.5 17L6 9H11V11H6.2L6.4 15.5L12 17L17.6 15.5L17.8 11H13V9H18L17.5 17Z" />
                <path d="M20.5 5.5L12 2.5L3.5 5.5L5 18L12 21L19 18L20.5 5.5Z" fill="#264de4" />
                <path d="M12 4V19.5L17.5 17.5L18.5 6.5L12 4Z" fill="#2965f1" />
                <path d="M12 15.5V13H15.8L15.4 16.5L12 17.4V19.2L17.2 17.6L17.8 11H7V9H18L18.5 6H5.5L5.6 7H12V9H5.8L6.2 15.5L12 17.4V15.5Z" fill="white" />
            </svg>
        ),
        slug: 'css',
        color: '#2965f1'
    },
    {
        id: 3,
        title: 'JavaScript Tutorial',
        description: 'JavaScript is a lightweight, cross-platform, OOP language. It is a scripting language for web pages. It is used to make web pages interactive.',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-16 h-16 text-[#f7df1e]">
                <rect x="2" y="2" width="20" height="20" rx="2" fill="#f0db4f" />
                <path d="M16.5 16.5C16.5 16.5 16 17.5 14.5 17.5C13 17.5 12.5 16.5 12.5 15V11H10.5V15C10.5 17.5 12 19 14.5 19C17 19 18 17.5 18 17.5L16.5 16.5ZM7.5 19V17H9V11H7.5V15.5C7.5 15.5 7 15.5 6.5 15C6 14.5 6 13.5 6 13.5H4.5C4.5 13.5 4.5 15.5 5.5 16.5C6.5 17.5 7.5 17.5 7.5 17.5V19Z" fill="#323330" />
            </svg>
        ),
        slug: 'javascript',
        color: '#f7df1e'
    },
    {
        id: 4,
        title: 'Python Tutorial',
        description: 'Python is a high-level, interpreted, general-purpose programming language. Its design philosophy emphasizes code readability with the use of significant indentation.',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-16 h-16">
                <defs>
                    <linearGradient id="pythonGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#3776ab" />
                        <stop offset="100%" stopColor="#ffd343" />
                    </linearGradient>
                </defs>
                <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 4.5C13.5 4.5 14.5 5 14.5 6H10V7H15.5C16.3 7 17 7.7 17 8.5V12H15V9H9V13H11V15H6.5C5.7 15 5 14.3 5 13.5V10C5 8 7 8 8 8V6C8 5 9 4.5 10 4.5H12ZM12 19.5C10.5 19.5 9.5 19 9.5 18H14V17H8.5C7.7 17 7 16.3 7 15.5V12H9V15H15V11H13V9H17.5C18.3 9 19 9.7 19 10.5V14C19 16 17 16 16 16V18C16 19 15 19.5 14 19.5H12Z" fill="url(#pythonGrad)" />
            </svg>
        ),
        slug: 'python',
        color: '#3776ab'
    },
];
