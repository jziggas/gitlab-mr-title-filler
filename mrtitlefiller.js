let input = document.getElementById('merge_request_title');
if (input) {
  let commit = document.getElementsByClassName('commit-row-message item-title');
  let title = commit[0].text + commit[1].text  + commit[2].text ;
  input.value = title;
}
