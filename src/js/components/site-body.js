import React, { PureComponent } from 'react';
import Markdown from 'react-markdown';
import changeTheme from 'helpers/change-theme';

export default class SiteBody extends PureComponent {
  constructor(props) {
    super(props);
  }

  postDate = () => {
    const postDate = new Date('December 17, 1995 03:24:00');
    return '2017-10-31'
    return postDate.valueOf();
  }

  articleContent = () => {
    return this.props.content
      ? <Markdown source={this.props.content} />
      : [
        <p key="1">Hot chicken messenger bag vexillologist af, normcore humblebrag twee. Gentrify biodiesel sartorial art party YOLO pabst. Lumbersexual messenger bag forage single-origin coffee chillwave glossier. Stumptown freegan YOLO trust fund adaptogen crucifix venmo glossier. Glossier cronut aesthetic typewriter, small batch wolf trust fund chia put a bird on it prism church-key. Tofu occupy XOXO subway tile kinfolk hella tattooed photo booth pok pok heirloom etsy chicharrones messenger bag hot chicken knausgaard. Ethical chia neutra salvia banjo knausgaard leggings bespoke pok pok taiyaki jianbing irony. Roof party single-origin coffee church-key, fixie retro man braid tilde brunch next level chambray. Adaptogen portland enamel pin cray. 8-bit ethical hella retro. Keffiyeh vaporware af offal vegan.</p>,
        <p key="2">Keytar meditation waistcoat sustainable. Disrupt plaid tumblr, trust fund seitan mumblecore tacos truffaut. Hoodie kogi tbh small batch. Etsy health goth microdosing cliche subway tile heirloom occupy humblebrag XOXO pop-up listicle. Organic cornhole aesthetic salvia, gentrify tacos af fingerstache DIY gochujang crucifix copper mug. DIY tousled celiac kale chips wolf. Yr tofu hexagon try-hard 8-bit polaroid. Waistcoat gochujang distillery hexagon, tousled plaid chia truffaut ennui. Heirloom cliche iceland actually tbh readymade narwhal tilde echo park waistcoat aesthetic listicle williamsburg fanny pack.</p>,
        <p key="3">Put a bird on it slow-carb quinoa, deep v kitsch trust fund pitchfork DIY tumblr jean shorts gluten-free kinfolk. Kogi VHS butcher, tattooed marfa helvetica keytar plaid activated charcoal gastropub etsy franzen. Butcher etsy pok pok williamsburg, drinking vinegar air plant asymmetrical helvetica bitters letterpress. Polaroid farm-to-table pug quinoa bespoke knausgaard. Ennui yr single-origin coffee, umami pitchfork irony meggings green juice man braid edison bulb stumptown subway tile vexillologist. Yuccie tofu salvia lo-fi craft beer bitters sartorial raclette waistcoat hammock vape banh mi single-origin coffee everyday carry. Vaporware 8-bit irony man braid. Plaid neutra kickstarter crucifix shoreditch pork belly leggings keffiyeh man bun tacos DIY drinking vinegar. Glossier gastropub artisan cray. Lumbersexual synth unicorn 8-bit tofu gastropub. Roof party freegan banjo tumblr, kinfolk YOLO stumptown irony four dollar toast chambray activated charcoal before they sold out hot chicken.</p>,
        <p key="4">Health goth blue bottle stumptown XOXO, literally salvia bitters. DIY hashtag fingerstache, poke brooklyn knausgaard master cleanse echo park thundercats 3 wolf moon. Pug thundercats try-hard scenester fashion axe. Jianbing post-ironic slow-carb whatever disrupt williamsburg, knausgaard schlitz edison bulb +1. Bespoke cold-pressed meggings, adaptogen 90's mixtape prism bushwick unicorn seitan gentrify authentic. Umami authentic meditation blue bottle, etsy before they sold out la croix irony fanny pack actually waistcoat. Messenger bag tofu chartreuse echo park quinoa. Tousled tattooed humblebrag woke. Plaid letterpress pinterest pabst. Kitsch freegan master cleanse cardigan umami disrupt. Messenger bag whatever hashtag, offal sartorial green juice banh mi pok pok banjo kombucha coloring book master cleanse wayfarers quinoa. Art party DIY pour-over godard blue bottle. Taxidermy waistcoat heirloom mixtape umami street art tousled artisan beard fam live-edge twee shabby chic.</p>,
        <p key="5">IPhone venmo coloring book celiac distillery post-ironic 90's tote bag selvage kale chips chartreuse. Irony shoreditch brunch bitters twee put a bird on it quinoa kinfolk letterpress before they sold out. Gastropub edison bulb roof party actually lumbersexual gentrify blog listicle four loko asymmetrical. Normcore typewriter aesthetic chicharrones. Hot chicken food truck hammock man braid 3 wolf moon art party tilde. Actually mixtape church-key mlkshk butcher drinking vinegar poke. Church-key hoodie lo-fi, irony pabst adaptogen austin tbh pour-over roof party 90's beard heirloom. XOXO asymmetrical austin try-hard pitchfork aesthetic. Tofu glossier chillwave roof party, actually celiac letterpress offal brunch scenester YOLO bespoke 8-bit jean shorts.</p>
      ]
  }

  render() {
    return (
      <main className="main">
        <article className="post">
          <div className="post-meta">
            <h2 className="post-title">
              <span>{this.props.title}</span>
            </h2>
          </div>
          <div className="post-body contain">
            <div className="post-date">
              <a href="#!">{this.postDate()}</a>
              <a href="#!">Permalink</a>
              <a href="#!">GitHub</a>
              <a href="#!" onClick={changeTheme}>Color</a>
            </div>
            <div className="post-content">
              {this.articleContent()}
            </div>
          </div>
        </article>
      </main>
    );
  }
}
