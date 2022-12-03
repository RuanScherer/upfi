import {
  Image,
  Link,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalOverlay,
} from '@chakra-ui/react';

interface ModalViewImageProps {
  isOpen: boolean;
  onClose: () => void;
  imgUrl: string;
}

export function ModalViewImage({
  isOpen,
  onClose,
  imgUrl,
}: ModalViewImageProps): JSX.Element {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      isCentered
      closeOnOverlayClick
      closeOnEsc
    >
      <ModalOverlay />

      <ModalContent bg="transparent" w="fit">
        <ModalBody p={0} maxW="900px" maxH="600px">
          <Image src={imgUrl} borderTopRadius={1.5} objectFit="contain" />
        </ModalBody>

        <ModalFooter
          justifyContent="start"
          bgColor="pGray.900"
          borderBottomRadius={1.5}
          px={2.5}
          py={2}
        >
          <Link href={imgUrl} target="_blank" w="fit-content" fontSize="sm">
            Abrir original
          </Link>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
