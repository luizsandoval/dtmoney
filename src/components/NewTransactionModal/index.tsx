import ReactModal from 'react-modal';

import closeImg from '../../assets/close.svg';

import { Container } from './styles';

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
                <input placeholder='Categoria' />
                <button type='submit'>Cadastrar</button>
            </Container>
        </ReactModal>
    );
}
