import ReactModal from 'react-modal';

import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';

import { Container, TransactionTypeContainer } from './styles';

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose(): void;
}
export function NewTransactionModal({
    isOpen,
    onRequestClose,
}: NewTransactionModalProps) {
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

            <Container>
                <h2>Cadastrar transação</h2>
                <input placeholder='Título' />
                <input type='number' placeholder='Valor' />

                <TransactionTypeContainer>
                    <button type='button'>
                        <img src={incomeImg} alt='Entrada' />
                        <span>Entrada</span>
                    </button>
                    <button type='button'>
                        <img src={outcomeImg} alt='' />
                        <span>Saída</span>
                    </button>
                </TransactionTypeContainer>
                <input placeholder='Categoria' />
                <button type='submit'>Cadastrar</button>
            </Container>
        </ReactModal>
    );
}
