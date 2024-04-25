import { nanoid } from 'nanoid';

const projectsData = [
    {
        id: nanoid(),
        title: 'Fashion Biju',
        coverImage: 'project-images/fashion-biju-cover.jpeg',
        album: ['../project-images/fashion-biju-01.jpeg', '../project-images/fashion-biju-04.jpeg', '../project-images/fashion-biju-10.jpeg', '../project-images/fashion-biju-18.jpeg', '../project-images/fashion-biju-20.jpeg', '../project-images/fashion-biju-23.jpeg'],
        tag: 'commercial',
        featured: true,
        render: '3D Render',
        location: 'São Paulo, Brazil',
        year: 2022,
    },

    {
        id: nanoid(),
        title: 'Imperio Biju',
        coverImage: 'project-images/imperio_biju_cover.png',
        album: ['../project-images/IMAGEM-01.png', '../project-images/IMAGEM-02.png', '../project-images/IMAGEM-03.png', '../project-images/IMAGEM-04.png', '../project-images/IMAGEM-05.png', '../project-images/IMAGEM-00.png'],
        tag: 'commercial',
        featured: true,
        render: '3D Render',
        location: 'São Paulo, Brazil',
        year: 2022,
    },

    {
        id: nanoid(),
        title: 'Miss Amora',
        coverImage: 'project-images/miss_amora_cover.png',
        album: ['../project-images/miss_amora_03.png', '../project-images/miss_amora_02.png', '../project-images/miss_amora_04.png', '../project-images/miss_amora_05.png', '../project-images/miss_amora_06.png'],
        tag: 'commercial',
        featured: false,
        render: '3D Render',
        location: 'São Paulo, Brazil',
        year: 2022
    },

    {
        id: nanoid(),
        title: 'Jaque Biju',
        coverImage: 'project-images/jaque_biju_cover.png',
        album: [null],
        tag: 'commercial',
        featured: true,
        render: '3D Render',
        location: 'São Paulo, Brazil',
        year: 2022
    },

    {
        id: nanoid(),
        title: 'Modern Living',
        coverImage: 'project-images/bedroom_apt_cover.png',
        album: [null],
        tag: 'residential',
        featured: true,
        render: '3D Render',
        location: 'São Paulo, Brazil',
        year: 2022
    },

    {
        id: nanoid(),
        title: 'Clínica Oncológica',
        coverImage: 'project-images/clinica_oncologica_cover.png',
        album: [null],
        tag: 'healthcare',
        featured: true,
        render: '3D Render',
        location: 'São Paulo, Brazil',
        year: 2022
    },

    {
        id: nanoid(),
        title: 'Apartamento Sacomã',
        coverImage: 'project-images/apartamento_sacoma_cover.png',
        album: [null],
        tag: 'residential',
        featured: true,
        render: '3D Render',
        location: 'São Paulo, Brazil',
        year: 2022
    }
]

export default projectsData;
