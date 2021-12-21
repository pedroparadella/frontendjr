export interface ICardProps{
  name: string | undefined;
  front_default: string | undefined;
  handleOpenDeleteModal: () => void;
  handleOpenNewCardModal: () => void;
}