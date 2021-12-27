import { useState } from 'react';
import ReactModal from 'react-modal';

import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';
import { NewTransactionModal } from './components/NewTransactionModal';

import { GlobalStyle } from './styles/global';

import { TransactionsContext } from './TransactionsContext';

ReactModal.setAppElement('#root');

export function App() {
    const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
        useState(false);

    function handleOpenNewTransactionModal() {
        setIsNewTransactionModalOpen(true);
    }

    function handleCloseNewTransactionModal() {
        setIsNewTransactionModalOpen(false);
    }

    return (
        <TransactionsContext.Provider value={[]}>
            <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
            <Dashboard />

            <NewTransactionModal
                isOpen={isNewTransactionModalOpen}
                onRequestClose={handleCloseNewTransactionModal}
            />
            <GlobalStyle />
        </TransactionsContext.Provider>
    );
}
