import { useRef } from 'react';
import {
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogBody,
  AlertDialogFooter,
  Button,
} from '@chakra-ui/react';

function Alert({ error, setError }) {
  const onClose = () => setError(false);
  const cancelRef = useRef();

  return (
    <AlertDialog
      isOpen={error}
      leastDestructiveRef={cancelRef}
      onClose={onClose}
    >
      <AlertDialogOverlay>
        <AlertDialogContent>
          <AlertDialogHeader fontSize="lg" fontWeight="bold">
            Error
          </AlertDialogHeader>
          <AlertDialogBody>Something went wrong.</AlertDialogBody>
          <AlertDialogFooter>
            <Button ref={cancelRef} variant={'outline'} onClick={onClose}>
              Close
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
}

export default Alert;
