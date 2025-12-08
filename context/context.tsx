import React, { createContext, ReactNode, useContext, useState } from 'react';

export interface JournalEntry {
    id: string;
    journalId: string;
    title: string;
    metadata: string;
    date: Date;
    imageUri?: string;
}

export interface Journal {
    id: string;
    name: string;
    color: string;
    entries: number;
}

interface AppContextType {
    entries: JournalEntry[];
    addEntry: (entry: Omit<JournalEntry, 'id'>) => void;

    journals: Journal[];
    addJournal: (journal: Omit<Journal, 'id' | 'entries'>) => void;

    activeJournal: Journal | null;
    setActiveJournal: (journal: Journal | null) => void;

    updateJournal: (journalId: string, updates: Partial<Omit<Journal, 'id'>>) => void;
    deleteJournal: (journalId: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const initialJournals: Journal[] = [
    { id: '1', name: 'Journal', color: 'bg-blue-500', entries: 0 },
];

export const AppContextProvider = ({ children }: { children: ReactNode }) => {
    const [entries, setEntries] = useState<JournalEntry[]>([]);
    const [journals, setJournals] = useState<Journal[]>(initialJournals);
    const [activeJournal, setActiveJournal] = useState<Journal | null>(initialJournals[0]);



    // const addEntry = (newEntry: Omit<JournalEntry, 'id'>) => {
    //     const entryWithId: JournalEntry = {
    //         ...newEntry,
    //         id: new Date().toISOString() + Math.random(),
    //     };
    //     setEntries(prevEntries => [entryWithId, ...prevEntries]);
    // };
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
        <AppContext.Provider value={{ entries, addEntry, journals, addJournal, activeJournal, setActiveJournal, updateJournal, deleteJournal }}>
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