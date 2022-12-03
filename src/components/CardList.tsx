import { SimpleGrid, useDisclosure } from '@chakra-ui/react';
import { useState } from 'react';
import { Card } from './Card';
import { ModalViewImage } from './Modal/ViewImage';

interface Card {
  title: string;
  description: string;
  url: string;
  ts: number;
  id: string;
}

interface CardsProps {
  cards: Card[];
}

export function CardList({ cards }: CardsProps): JSX.Element {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedImageURL, setSelectedImageURL] = useState<string>('');

  // TODO FUNCTION HANDLE VIEW IMAGE
  function handleViewImage(url: string): void {
    setSelectedImageURL(url);
    onOpen();
  }

  return (
    <>
      <SimpleGrid gap={10} columns={3}>
        {cards.map(card => (
          <Card
            data={card}
            viewImage={url => handleViewImage(url)}
            key={card.id}
          />
        ))}
      </SimpleGrid>

      <ModalViewImage
        isOpen={isOpen}
        onClose={onClose}
        imgUrl={selectedImageURL}
      />
    </>
  );
}
