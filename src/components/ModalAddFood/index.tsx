import { Component, createRef, Ref } from 'react';
import { FiCheckSquare } from 'react-icons/fi';

import { Form } from './styles';
import { FoodData } from '../../pages/Dashboard';
import Modal from '../Modal';
import Input from '../Input';
import { FormHandles } from '@unform/core';

type ModalAddFoodProps = {
  isOpen: boolean;
  setIsOpen(): void;
  handleAddFood(food: FoodData): Promise<void>;
};

class ModalAddFood extends Component<ModalAddFoodProps> {
  private formRef: Ref<FormHandles>;

  constructor(props: ModalAddFoodProps) {
    super(props);

    this.formRef = createRef();
  }

  handleSubmit = async (data: FoodData) => {
    const { setIsOpen, handleAddFood } = this.props;

    handleAddFood(data);
    setIsOpen();
  };

  render() {
    const { isOpen, setIsOpen } = this.props;

    return (
      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        <Form ref={this.formRef} onSubmit={this.handleSubmit}>
          <h1>Novo Prato</h1>
          <Input name="image" placeholder="Cole o link aqui" />

          <Input name="name" placeholder="Ex: Moda Italiana" />
          <Input name="price" placeholder="Ex: 19.90" />

          <Input name="description" placeholder="Descrição" />
          <button type="submit" data-testid="add-food-button">
            <p className="text">Adicionar Prato</p>
            <div className="icon">
              <FiCheckSquare size={24} />
            </div>
          </button>
        </Form>
      </Modal>
    );
  }
}

export default ModalAddFood;
