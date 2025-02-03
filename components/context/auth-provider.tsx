'use client';

import React, { createContext, useContext, useEffect, useMemo, useState} from 'react';

// Auth Context
interface AuthContextProps {
    userId: string | null;
    setUserId: (id: string | null) => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const useAuth = (): AuthContextProps => {
    const context = useContext(AuthContext);
    if (!context) {
      throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
  };

// Auth Provider
type Props = {
    children: React.ReactNode;
    user: any;
}

export const AuthProvider: React.FC<Props> = ({children, user}) => {
    
    
    const [userId, setUserId] = useState<string | null>(null);

    useEffect(() => {
        if (user && user.id) {
            setUserId(user.id);
        }
    }, [user]);

    return (
        <AuthContext.Provider value={{ userId, setUserId}}>
            {children}
        </AuthContext.Provider>
    )

}
