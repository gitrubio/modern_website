

export interface feedbackInterface {
    id:      string;
    content: string;
    name:    string;
    title:   string;
    img:     string;
}
export interface featureInterface {
    id:      string;
    content: string;
    icon:    string;
    title:   string;
}

export interface NavInterface {
    id:      string;
    title:   string;
}

export interface statsInterface {
    id:     string;
    title:  string;
    value:  number;
    type:   string;
}
interface link {
    name: string
    link: string
  }
export interface footerLinkInterface {
    title: string;
    links: link[];
}

export interface socialInterface {
    id :    string;
    icon :  string;
    link :  string;
}

export interface client {
    id:     string;
    logo:   string;
}

export interface FeedbackCardProps { 
    content:    string;
    name:       string;
    title:      string;
    img:        string;
}