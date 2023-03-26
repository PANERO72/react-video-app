import { createBoard } from '@wixc3/react-board';
import { Cards } from '../../../components/cards/cards';

export default createBoard({
    name: 'Cards',
    Board: () => <Cards />,
    environmentProps: {
        windowWidth: 1034,
    },
});
