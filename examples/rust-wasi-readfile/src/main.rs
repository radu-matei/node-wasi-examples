use std::env;
use std::fs;

fn main() {
    let contents =
        fs::read_to_string("/sandbox/file.txt").expect("Something went wrong reading the file");
    println!("Content:\n{}", contents);
}
