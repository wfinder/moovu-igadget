# HTML Transformations go here

$("/html") {
  clean_mobile_meta_tags()
  remove_all_styles()

  add_assets()


  @import "sections/header.ts"
  @import "sections/footer.ts"

  @import "mappings.ts"

}
$("//form[@id='subscribe_form']/label") {
  $label = text()
  $("./following-sibling::input") {
    attribute("placeholder", $label)
  }
  remove()
}
