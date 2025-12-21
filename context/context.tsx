import React, { createContext, ReactNode, useContext, useState } from 'react';
export interface JournalEntry {
    id: string;
    journalId: string;
    title: string;
    metadata: string;
    date: Date;
    imageUri?: string;
    promptText?: string;
}

export interface Journal {
    id: string;
    name: string;
    color: string;
    entries: number;
    description?: string;
}

export interface TemplateLineItem {
    id: number;
    text: string;
    isStyled: boolean;
}

export interface UserTemplate {
    id: string;
    name: string;
    content: TemplateLineItem[]; // The template content is an array of lines
}

interface AppContextType {
    entries: JournalEntry[];
    addEntry: (entry: Omit<JournalEntry, 'id'>) => void;

    updateEntry: (entryId: string, updates: Partial<Omit<JournalEntry, 'id'>>) => void;
    deleteEntry: (entryId: string) => void;

    journals: Journal[];
    addJournal: (journal: Omit<Journal, 'id' | 'entries'>) => void;

    activeJournal: Journal | null;
    setActiveJournal: (journal: Journal | null) => void;

    updateJournal: (journalId: string, updates: Partial<Omit<Journal, 'id'>>) => void;
    deleteJournal: (journalId: string) => void;

    isShowingSplash: boolean;
    setIsShowingSplash: React.Dispatch<React.SetStateAction<boolean>>;

    isAuthenticated: boolean;
    setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;

    userTemplates: UserTemplate[];
    addUserTemplate: (template: Omit<UserTemplate, 'id'>) => void;
    updateUserTemplate: (templateId: string, updates: Partial<Omit<UserTemplate, 'id'>>) => void;

}

const AppContext = createContext<AppContextType | undefined>(undefined);

const initialJournals: Journal[] = [
    { id: '1', name: 'Journal', color: '#00AEEF', entries: 0 },
];

export const AppContextProvider = ({ children }: { children: ReactNode }) => {
    const [entries, setEntries] = useState<JournalEntry[]>([]);
    const [journals, setJournals] = useState<Journal[]>(initialJournals);
    const [activeJournal, setActiveJournal] = useState<Journal | null>(initialJournals[0]);
    const [isShowingSplash, setIsShowingSplash] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(true);
    const [userTemplates, setUserTemplates] = useState<UserTemplate[]>([]);

    const addUserTemplate = (newTemplateData: Omit<UserTemplate, 'id'>) => {
        const newTemplate: UserTemplate = {
            ...newTemplateData,
            id: new Date().toISOString() + Math.random(),
        };
        setUserTemplates(prev => [...prev, newTemplate]);
    };


    const updateUserTemplate = (templateId: string, updates: Partial<Omit<UserTemplate, 'id'>>) => {
        setUserTemplates(prev =>
            prev.map(template =>
                template.id === templateId
                    ? { ...template, ...updates }
                    : template
            )
        );
    };

    const addEntry = (newEntryData: Omit<JournalEntry, 'id'>) => {
        const entryWithId: JournalEntry = {
            ...newEntryData,
            id: new Date().toISOString() + Math.random(),
        };
        setEntries(prevEntries => [entryWithId, ...prevEntries]);

        setJournals(prevJournals =>
            prevJournals.map(journal =>
                journal.id === newEntryData.journalId
                    ? { ...journal, entries: journal.entries + 1 }
                    : journal
            )
        );
    };


    const updateEntry = (entryId: string, updates: Partial<Omit<JournalEntry, 'id'>>) => {
        setEntries(prevEntries =>
            prevEntries.map(entry =>
                entry.id === entryId
                    ? { ...entry, ...updates }
                    : entry
            )
        );
    };

    // --- CHANGE 3: Implement the deleteEntry function ---
    const deleteEntry = (entryId: string) => {
        // Find the entry to get its journalId
        const entryToDelete = entries.find(e => e.id === entryId);
        if (entryToDelete) {
            // Decrement the entry count of the corresponding journal
            setJournals(prevJournals =>
                prevJournals.map(journal =>
                    journal.id === entryToDelete.journalId
                        ? { ...journal, entries: Math.max(0, journal.entries - 1) } // Prevent negative counts
                        : journal
                )
            );
        }
        // Remove the entry from the list
        setEntries(prevEntries => prevEntries.filter(entry => entry.id !== entryId));
    };



    const addJournal = (newJournalData: Omit<Journal, 'id' | 'entries'>) => {
        const newJournal: Journal = {
            ...newJournalData,
            id: new Date().toISOString() + Math.random(),
            entries: 0,
        };
        setJournals(prevJournals => [...prevJournals, newJournal]);
        setActiveJournal(newJournal);
    };


    const updateJournal = (journalId: string, updates: Partial<Omit<Journal, 'id'>>) => {
        setJournals(prevJournals =>
            prevJournals.map(journal =>
                journal.id === journalId
                    ? { ...journal, ...updates }
                    : journal
            )
        );
    };

    const deleteJournal = (journalId: string) => {
        if (activeJournal?.id === journalId) {
            const remainingJournals = journals.filter(j => j.id !== journalId);
            setActiveJournal(remainingJournals.length > 0 ? remainingJournals[0] : null);
        }

        setJournals(prevJournals => prevJournals.filter(journal => journal.id !== journalId));
    };

    return (
        <AppContext.Provider value={{
            entries, addEntry, updateEntry, deleteEntry, journals, addJournal, activeJournal, setActiveJournal, updateJournal, deleteJournal, isShowingSplash,
            setIsShowingSplash, isAuthenticated,
            setIsAuthenticated, userTemplates,
            addUserTemplate,
            updateUserTemplate,
        }}>
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => {
    const context = useContext(AppContext);
    if (context === undefined) {
        throw new Error('useAppContext must be used within an AppContextProvider');
    }
    return context;
};