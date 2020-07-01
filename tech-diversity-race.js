function TechDiversityRace() {

  // Name for the visualisation to appear in the menu bar.
  this.name = 'Tech Diversity: Race';

  // Each visualisation must have a unique ID with no special
  // characters.
  this.id = 'tech-diversity-race';

  // Property to represent whether data has been loaded.
  this.loaded = false;

  // Preload the data. This function is called automatically by the
  // gallery when a visualisation is added.
  this.preload = function() {
    var self = this;
    this.data = loadTable(
      './data/tech-diversity/race-2018.csv', 'csv', 'header',
      // Callback function to set the value
      // this.loaded to true.
      function(table) {
        self.loaded = true;
      });
  };

  this.setup = function() {
    if (!this.loaded) {
      console.log('Data not yet loaded');
      return;
    }

    // Create a select DOM element.

    // Fill the options with all company names.
  };

  this.destroy = function() {
    removeElements();
  };

  // Create a new pie chart object.
  this.pie = new PieChart(width / 2, height / 2, width * 0.4);

  this.draw = function() {
    if (!this.loaded) {
      console.log('Data not yet loaded');
      return;
    }

    // Get the value of the company we're interested in from the
    // select item. Temporarily hard-code an example for now.
    var companyName = this.data.getRow(0);

    // Get the column of raw data for companyName.
     var col = this.data.getColumn(companyName);

    // Convert all data strings to numbers.
    col = stringsToNumbers(col);

    // Copy the row labels from the table (the first item of each row).
        var labels = this.data.getColumn(0);
        console.log(col);

    // Colour to use for each category.
     var colours = [(255,127,80),
                    (70,130,180),
                    (255,105,180),
                    (144,238,144),
                    (255,215,0),
                    (0,128,128)
                   ]

    // Make a title.
    var title = 'Employee diversity at ' + companyName;

    // Draw the pie chart!
//     this.pie.draw(col, labels, colours, title);
  };
}
