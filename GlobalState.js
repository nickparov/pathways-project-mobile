import { Asset, useAssets } from 'expo-asset';

const GlobalState = {
    user: {
        employed: true,
    },
    sources: {
        blogs: [],
        profileLogos: [],
        companyLogos: [],
        hackLogos: [],
        practicePics: [],
        langIcons: [],
    },
};

// load all blog images
GlobalState.sources.blogs.push(require(`./assets/blog-pics/blog-1.jpg`));
GlobalState.sources.blogs.push(require(`./assets/blog-pics/blog-2.jpg`));
GlobalState.sources.blogs.push(require(`./assets/blog-pics/blog-3.jpg`));
GlobalState.sources.blogs.push(require(`./assets/blog-pics/blog-4.jpg`));
GlobalState.sources.blogs.push(require(`./assets/blog-pics/blog-5.jpg`));
GlobalState.sources.blogs.push(require(`./assets/blog-pics/blog-6.jpg`));
GlobalState.sources.blogs.push(require(`./assets/blog-pics/blog-7.jpg`));
GlobalState.sources.blogs.push(require(`./assets/blog-pics/blog-8.jpg`));
GlobalState.sources.blogs.push(require(`./assets/blog-pics/blog-9.jpg`));

// load all person logo images
GlobalState.sources.profileLogos.push(
    require(`./assets/profile-screen/friend-1.jpg`)
);
GlobalState.sources.profileLogos.push(
    require(`./assets/profile-screen/friend-2.jpg`)
);
GlobalState.sources.profileLogos.push(
    require(`./assets/profile-screen/friend-3.jpg`)
);
GlobalState.sources.profileLogos.push(
    require(`./assets/profile-screen/friend-4.jpg`)
);

// load all companyIcons
GlobalState.sources.companyLogos.push(
    require(`./assets/companies-logo/amazon_logo-freelogovectors.net_.png`)
);
GlobalState.sources.companyLogos.push(
    require(`./assets/companies-logo/google-logo.png`)
);
GlobalState.sources.companyLogos.push(
    require(`./assets/companies-logo/mlh-logo-color.png`)
);
GlobalState.sources.companyLogos.push(
    require(`./assets/companies-logo/uic.png`)
);

// Load hackathons
GlobalState.sources.hackLogos.push(
    require(`./assets/hackathon-pic/hack-nft.png`)
);
GlobalState.sources.hackLogos.push(
    require(`./assets/hackathon-pic/hack-timeweb.png`)
);

GlobalState.sources.practicePics.push(
    require(`./assets/practice-screen/java-back.jpg`)
);
GlobalState.sources.practicePics.push(
    require(`./assets/practice-screen/python-back.jpg`)
);

// Language
GlobalState.sources.langIcons.push(
    require(`./assets/icons-programming/icons8-c-programming-48.png`)
);
GlobalState.sources.langIcons.push(
    require(`./assets/icons-programming/icons8-c-sharp-logo-2-48.png`)
);
GlobalState.sources.langIcons.push(
    require(`./assets/icons-programming/icons8-html-5-48.png`)
);
GlobalState.sources.langIcons.push(
    require(`./assets/icons-programming/icons8-java-48.png`)
);
GlobalState.sources.langIcons.push(
    require(`./assets/icons-programming/icons8-ruby-programming-language-48.png`)
);

export default GlobalState;
