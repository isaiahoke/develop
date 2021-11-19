/**
 * BLOCK: develop
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

//  Import CSS.
import './editor.scss';
import './style.scss';

const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks

/**
 * Register: aa Gutenberg Block.
 *
 * Registers a new block provided a unique name and an object defining its
 * behavior. Once registered, the block is made editor as an option to any
 * editor interface where blocks are implemented.
 *
 * @link https://wordpress.org/gutenberg/handbook/block-api/
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */
registerBlockType( 'cgb/block-develop', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __( 'develop - CGB Block' ), // Block title.
	icon: 'shield', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: 'common', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [
		__( 'develop — CGB Block' ),
		__( 'CGB Example' ),
		__( 'create-guten-block' ),
	],

	/**
	 * The edit function describes the structure of your block in the context of the editor.
	 * This represents what the editor will render when the block is used.
	 *
	 * The "edit" property must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 *
	 * @param {Object} props Props.
	 * @returns {Mixed} JSX Component.
	 */
	edit: ( props ) => {
		// Creates a <p class='wp-block-cgb-block-develop'></p>.
		return (
			<div className={ props.className }>
				
				<h3> TEST OPTION 2 </h3>
				<h4>Display site's name</h4>
				<p>recreate this whole icon box component as UI of your gutenberg block; displaying site's title as a header and sites tagline at the bottom below the 2nd paragraph. the 2nd paragraph should be editable.</p>
				<p>
					lorem ipsum dolor sit amet, id placerat partiendo sea, corpora prodesset incorrupte has id, cu est disputando ullamcorper. Option mentitum referrentur vel ea. Modo suscipit qui et, quo mutat minim reformidans an, ex dicant dissentiunt neglegentur eam. Autem facer pri ut, in duo ullum
				</p>
				<h6>
					DISPLAY SITE'S TAGLINE{ ' ' }	
				</h6>
			</div>
		);
	},

	/**
	 * The save function defines the way in which the different attributes should be combined
	 * into the final markup, which is then serialized by Gutenberg into post_content.
	 *
	 * The "save" property must be specified and must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 *
	 * @param {Object} props Props.
	 * @returns {Mixed} JSX Frontend HTML.
	 */




	save: function (props) {
		return el(RichText.Content, {
			tagName: 'p', value: props.attributes.content,
		});
	},
});

(
	window.wp.blocks,
	window.wp.editor,
	window.wp.element
 );

