import { useState } from 'react';
import ReactModal from 'react-modal';
import { createServer } from 'miragejs';

import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';
import { NewTransactionModal } from './components/NewTransactionModal';

import { GlobalStyle } from './styles/global';

createServer({
    routes() {
        this.namespace = 'api';

        this.get('/transactions', () => {
            return [
                {
                    id: 1,
                    title: 'Transaction 1',
                    amount: 400,
                    type: 'deposit',
                    category: 'Food',
                    createdAt: new Date(),
                },
            ];
        });
    },
});

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
        <>
            <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
            <Dashboard />

            <NewTransactionModal
                isOpen={isNewTransactionModalOpen}
                onRequestClose={handleCloseNewTransactionModal}
            />
            <GlobalStyle />
        </>
    );
}
