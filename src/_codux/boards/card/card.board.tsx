import { createBoard } from '@wixc3/react-board';
import { Card } from '../../../components/card/card';

export default createBoard({
    name: 'Card',
    Board: () => (
        <Card
            movie={{
                id: 1,
                release_date: '2021',
                title: 'Avatar',
                vote_average: 7,
                poster_path:
                    'https://pics.filmaffinity.com/Avatar_El_sentido_del_agua-722646748-large.jpg',
                overview:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus pellentesque dolor non sollicitudin. Suspendisse potenti. Curabitur semper vehicula commodo. Nullam at justo elit. Morbi velit sapien, placerat eu dignissim eget, vulputate sit amet ipsum.',
            }}
        />
    ),
});
