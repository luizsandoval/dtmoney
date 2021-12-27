import { FormEvent, useState, useContext } from 'react';
import ReactModal from 'react-modal';

import { TransactionsContext } from '../../TransactionsContext';

import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';

import { Container, TransactionTypeContainer, RadioBox } from './styles';

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose(): void;
}

export function NewTransactionModal({
    isOpen,
    onRequestClose,
}: NewTransactionModalProps) {
    const { createTransaction } = useContext(TransactionsContext);

    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState(0);
    const [category, setCategory] = useState('');
    const [type, setType] = useState<'deposit' | 'withdraw'>('deposit');

    function handleCreateNewTransaction(event: FormEvent) {
        event.preventDefault();

        createTransaction({
            type,
            title,
            amount,
            category,
        });
    }

    return (
        <ReactModal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            className='react-modal-content'
            overlayClassName='react-modal-overlay'
        >
            <button
                type='button'
                className='react-modal-close'
                onClick={onRequestClose}
            >
                <img src={closeImg} alt='Fechar modal' />
            </button>

            <Container onSubmit={handleCreateNewTransaction}>
                <h2>Cadastrar transação</h2>
                <input
                    placeholder='Título'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <input
                    type='number'
                    placeholder='Valor'
                    value={amount}
                    onChange={(e) => setAmount(Number(e.target.value))}
                />

                <TransactionTypeContainer>
                    <RadioBox
                        type='button'
                        onClick={() => setType('deposit')}
                        isActive={type === 'deposit'}
                        activeColor='green'
                    >
                        <img src={incomeImg} alt='Entrada' />
                        <span>Entrada</span>
                    </RadioBox>
                    <RadioBox
                        type='button'
                        onClick={() => setType('withdraw')}
                        isActive={type === 'withdraw'}
                        activeColor='red'
                    >
                        <img src={outcomeImg} alt='' />
                        <span>Saída</span>
                    </RadioBox>
                </TransactionTypeContainer>
                <input
                    placeholder='Categoria'
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                />
                <button type='submit'>Cadastrar</button>
            </Container>
        </ReactModal>
    );
}
